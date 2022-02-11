import { ContactEntity, PhoneNumberEntity } from "./entities";

export interface SharedState {
  contacts: ContactEntity;
  phoneNumbers: PhoneNumberEntity;
}
