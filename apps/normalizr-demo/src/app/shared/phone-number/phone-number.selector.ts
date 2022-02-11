import { createSelector } from '@ngrx/store';
import { sharedSelector } from '../shared.selector';

// This returns the dictionary
export const phoneNumberSelector = createSelector(
  sharedSelector,
  (ss) => ss.phoneNumbers
);
