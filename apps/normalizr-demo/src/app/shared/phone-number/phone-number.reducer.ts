import { EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { PhoneNumber } from './phone-number';
import { addPhoneNumber, loadPhoneNumberResult } from './phone-number.actions';
import { phoneNumberAdapter } from './phone-number.adapter';

export const initialState: EntityState<PhoneNumber> = { ids: [], entities: {} };

export const phoneNumberReducer = createReducer(
  initialState,

  on(loadPhoneNumberResult,
    (_, phoneNumbers) =>
        phoneNumbers),
  on(addPhoneNumber,
    (state, phoneNumber) =>
      phoneNumberAdapter.addOne(phoneNumber, state)
    )

);
