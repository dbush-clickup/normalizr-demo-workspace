import { PhoneNumber } from "../phone-number/phone-number";

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  phoneNumbers: PhoneNumber[];
}
