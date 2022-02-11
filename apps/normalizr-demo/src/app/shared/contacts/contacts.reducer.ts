import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Contact } from './contact';
import { loadContactsResult } from './contacts.actions';

export const contactsFeatureKey = 'contacts';

export const initialState: EntityState<Contact> = { ids: [], entities: {} };

export const contactsReducer = createReducer(
  initialState,

  on(loadContactsResult,
    (_, contacts) =>
        contacts),

);
