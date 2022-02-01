
import { createSelector } from "@ngrx/store";
import { sharedSelector } from "../shared.selector";
import { contactsAdapter } from "./contact.adapter";



// use selectors from the NgRX Entity Library to do all the heavy lifting
const { selectAll } = contactsAdapter.getSelectors();
// This returns the dictionary
export const contactSelector
  = createSelector(sharedSelector, (ss) => ss.contacts)

// This returns the array
export const selectAllContacts
  = createSelector(contactSelector, selectAll);
