
import { createSelector } from "@ngrx/store";
import { sharedSelector } from "../shared.selector";
import { Contact } from "./contact";


// This returns the dictionary
export const contactSelector
  = createSelector(sharedSelector, (ss) => ss.contacts)

// This returns the array
export const selectAllContacts
  = createSelector(contactSelector, (c) =>
    Object.keys(c).map((k) =>
      c[k] as Contact));
