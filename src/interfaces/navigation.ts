import {Contact} from '@interfaces/contacts';

export type RootStackParamList = {
  ContactList: undefined;
  ContactDetail: {contact: Contact};
};
