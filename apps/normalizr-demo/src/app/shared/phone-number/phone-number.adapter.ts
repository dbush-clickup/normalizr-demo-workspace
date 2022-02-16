import { createEntityAdapter } from '@ngrx/entity';
import { PhoneNumber } from './phone-number';

export const phoneNumberAdapter = createEntityAdapter<PhoneNumber>();
