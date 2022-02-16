import { createSelector } from '@ngrx/store';
import { assert } from '../assert.function';
import { getChildren } from '../get-children.function';
import { phoneNumberSelector } from '../phone-number/phone-number.selector';
import { sharedSelector } from '../shared.selector';
import { Contact } from './contact';
import { contactsAdapter } from './contacts.adapter';

// use selectors from the NgRX Entity Library to do all the heavy lifting
const { selectAll } = contactsAdapter.getSelectors();
// This returns the dictionary
export const contactSelector = createSelector(
  sharedSelector,
  (ss) => ss.contacts
);

// This returns the array
export const selectAllContacts = createSelector(contactSelector, selectAll);

export const selectContactsWithPhones = createSelector(
  contactSelector,
  phoneNumberSelector,
  (contactEntities, phoneNumberEntities) =>
    contactEntities.ids.map((id) => {
      const contact = contactEntities.entities[id] as Contact;
      assert(contact.phoneNumberIds !== undefined, 'contact.phoneNumberIds must be defined');
      return {
        ...contact,
        phoneNumbers: getChildren(
          phoneNumberEntities,
          contact.phoneNumberIds)
      } as Contact
    }));
