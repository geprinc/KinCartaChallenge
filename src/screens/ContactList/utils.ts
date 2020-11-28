import Immutable from 'seamless-immutable';
import { Contact } from '@interfaces/contacts';

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
