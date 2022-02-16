import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { normalize, NormalizedSchema, schema } from 'normalizr';
import { EntitiesDictionary } from '../entities';

const fakeData: Array<Contact> = [
  {
    id: 3,
    firstName: 'Dave',
    lastName: 'Bush',
    phoneNumbers: [
      {
        id: 1,
        phoneNumber: '123-456-7897',
      },
    ],
  },
  {
    id: 2,
    firstName: 'Wife',
    lastName: 'Bush',
    phoneNumbers: [
      {
        id: 1,
        phoneNumber: '123-456-7897',
      },
      {
        id: 2,
        phoneNumber: '345-678-9121',
      },
    ],
  },
];

const phoneSchema = new schema.Entity('phoneNumbers');
const contactSchema = new schema.Entity('contacts', {'phoneNumbers': [phoneSchema] });

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  list(): Observable<NormalizedSchema<EntitiesDictionary, Array<number>>> {
    return of(fakeData).pipe(
      map((contacts: Array<Contact>) => normalize(contacts, [contactSchema]))
    );
  }
}
