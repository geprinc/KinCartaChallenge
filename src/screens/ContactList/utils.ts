const sortedByName = (contactList: any) =>
  contactList.sort((contact1: any, contact2: any) =>
    contact1.name >= contact2.name ? 1 : -1,
  );

export const createContactList = (contactList: any) => [
  {
    title: 'FAVORITE CONTACTS',
    data: sortedByName(
      contactList.filter((contact: any) => contact.isFavorite),
    ),
  },
  {
    title: 'OTHER CONTACTS',
    data: sortedByName(
      contactList.filter((contact: any) => !contact.isFavorite),
    ),
  },
];
