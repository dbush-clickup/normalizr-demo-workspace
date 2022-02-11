import { Dictionary, EntityState } from "@ngrx/entity";
import { Contact } from "./contacts/contact";
import { PhoneNumber } from "./phone-number/phone-number";

export type ContactEntity = EntityState<Contact>;
export type PhoneNumberEntity = EntityState<PhoneNumber>;
export type ContactDictionary = Dictionary<Contact>;
export type PhoneNumberDictionary = Dictionary<PhoneNumber>;
export type EntitiesDictionary = Dictionary<ContactDictionary | PhoneNumberDictionary>;
