import { Dictionary } from "@ngrx/entity";
import { Contact } from "./contacts/contact";

export interface SharedState {
  contacts: Dictionary<Contact>;
}
