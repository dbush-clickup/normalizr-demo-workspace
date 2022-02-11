import { EntityState } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { PhoneNumber } from './phone-number';



export const loadPhoneNumberResult = createAction(
  '[PhoneNumbers] Load PhoneNumber Result',
  props<EntityState<PhoneNumber>>()
);





