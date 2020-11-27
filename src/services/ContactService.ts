import api from '../config/api';

export const getContacts = () => api.get('contacts.json');

export const getContactsTwo = () =>
  fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => error);
