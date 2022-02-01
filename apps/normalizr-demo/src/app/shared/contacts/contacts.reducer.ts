import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Contact } from './contact';
import * as ContactsActions from './contacts.actions';

export const contactsFeatureKey = 'contacts';

export const initialState: EntityState<Contact> = { ids: [], entities: {} };

export const contactsReducer = createReducer(
  initialState,

  on(ContactsActions.loadContactsResult,
    (_, contacts) =>
        contacts),

);
