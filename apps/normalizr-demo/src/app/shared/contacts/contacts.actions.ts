import { Dictionary } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Contact } from './contact';

export const loadContacts = createAction(
  '[Contacts] Load Contacts'
);

export const loadContactsResult = createAction(
  '[Contacts] Load Contacts Result',
  props<{contacts: Dictionary<Contact>}>()
);





