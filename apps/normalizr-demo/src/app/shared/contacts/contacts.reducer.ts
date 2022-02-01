import { Dictionary } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Contact } from './contact';
import * as ContactsActions from './contacts.actions';

export const contactsFeatureKey = 'contacts';

export const initialState: Dictionary<Contact> = { };

export const contactsReducer = createReducer(
  initialState,

  on(ContactsActions.loadContactsResult,
    (_, { contacts }) =>
      {
        return { ...contacts };
      }),

);
