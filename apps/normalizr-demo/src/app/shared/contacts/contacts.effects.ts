import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ContactsActions from './contacts.actions';
import { SharedState } from '../shared-state';
import { Store } from '@ngrx/store';
import { ContactsService } from './contact.service';
import { map, switchMap } from 'rxjs';


@Injectable()
export class ContactsEffects {
  loadContacts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ContactsActions.loadContacts),
      switchMap(() =>
        this.service.list()
      ),
      map((d) => {
        return ContactsActions.loadContactsResult({contacts: {...d.entities['contacts']}})
      })
    );
  });


  constructor(
    private service: ContactsService,
    private store: Store<SharedState>,
    private actions$: Actions
  ) {}

}
