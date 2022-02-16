import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { assert } from '../assert.function';
import { addPhoneNumber } from '../phone-number/phone-number.actions';
import { Contact } from './contact';
import { loadContactsResult } from './contacts.actions';
import { contactsAdapter } from './contacts.adapter';

export const contactsFeatureKey = 'contacts';

export const initialState: EntityState<Contact> = { ids: [], entities: {} };

export const contactsReducer = createReducer(
  initialState,

  on(loadContactsResult,
    (_, contacts) =>
        contacts),
  on(addPhoneNumber,
    (state, phoneNumber) => {
      assert(phoneNumber.contactId !== undefined, 'phoneNumber.contactId must be defined');
      const contact = state.entities[phoneNumber.contactId] as Contact;
      
      assert(contact.phoneNumberIds !== undefined, 'contact.phoneNumberIds must be defined');
      const phoneNumberIds = [...contact.phoneNumberIds, phoneNumber.id];
      return contactsAdapter.updateOne({ id: contact.id, changes: { phoneNumberIds } }, state);
    })
);
