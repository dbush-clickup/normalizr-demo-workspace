import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadContacts, loadContactsResult } from './contacts.actions';
import { loadPhoneNumberResult } from '../phone-number/phone-number.actions';
import { SharedState } from '../shared-state';
import { Store } from '@ngrx/store';
import { ContactsService } from './contact.service';
import { switchMap } from 'rxjs';
import { entityAdapter } from '../entity-adapter.function';
import { ContactDictionary, PhoneNumberDictionary } from '../entities';


@Injectable()
export class ContactsEffects {
  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadContacts),
      switchMap(() =>
        this.service.list()
      ),
      switchMap((d) => [
        loadContactsResult(entityAdapter(d.entities['contacts'] as ContactDictionary, d.result)),
        // we don't care about the order of the phone numbers because that is controlled by the contact
        // So we just pass in an empty array for this.
        loadPhoneNumberResult(entityAdapter(d.entities['phoneNumbers'] as PhoneNumberDictionary, []))
      ])
    );
  });


  constructor(
    private service: ContactsService,
    private store: Store<SharedState>,
    private actions$: Actions
  ) {}

}
