import { createEntityAdapter } from "@ngrx/entity"
import { Contact } from "./contact"

export const contactsAdapter
= createEntityAdapter<Contact>();
