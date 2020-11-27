import Immutable from 'seamless-immutable';

type Address = {
  city?: string;
  country?: string;
  state?: string;
  street?: string;
  zipCode?: string;
};

type Phone = {
  work?: string;
  home?: string;
};

export interface Contact {
  address: Address;
  birthdate?: string;
  companyName?: string;
  emailAddress?: string;
  id: string;
  isFavorite: boolean;
  largeImageURL?: string; // replace with image type
  name: string;
  phone: Phone;
  smallImageUrl?: string; // replace with image type
}

const sortedByName = (contactList: Contact[]) =>
  Immutable.asMutable(
    contactList,
  ).sort((contact1: Contact, contact2: Contact) =>
    contact1.name.localeCompare(contact2.name),
  );

export const createContactList = (contactList: Contact[]) => [
  {
    title: 'FAVORITE CONTACTS',
    data: sortedByName(
      contactList.filter((contact: Contact) => contact.isFavorite),
    ),
  },
  {
    title: 'OTHER CONTACTS',
    data: sortedByName(
      contactList.filter((contact: Contact) => !contact.isFavorite),
    ),
  },
];
