import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PhoneNumber } from './phone-number';
import { loadPhoneNumberResult } from './phone-number.actions';

export const contactsFeatureKey = 'contacts';

export const initialState: EntityState<PhoneNumber> = { ids: [], entities: {} };

export const phoneNumberReducer = createReducer(
  initialState,

  on(loadPhoneNumberResult,
    (_, phoneNumbers) =>
        phoneNumbers),

);
