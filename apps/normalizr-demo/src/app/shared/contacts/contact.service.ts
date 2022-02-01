import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { normalize, NormalizedSchema, schema } from 'normalizr';
import { Dictionary } from '@ngrx/entity';

const fakeData: Array<Contact> = [
 {
   id: 3,
   firstName: 'Dave',
   lastName: 'Bush',
 },
 {
  id: 2,
  firstName: 'Wife',
  lastName: 'Bush',
}

];

const contactSchema = new schema.Entity('contacts');

type ContactsDictionary = Dictionary<Contact>;
type EntitiesDictionary = Dictionary<ContactsDictionary>;

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  list(): Observable<NormalizedSchema<EntitiesDictionary, Array<number>>> {
    return of(fakeData).pipe(
      map((contacts: Array<Contact>) =>
        normalize(contacts, [contactSchema])
      )
    );
  }
}
