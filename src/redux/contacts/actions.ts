import {Dispatch} from 'react';
import {getContactsTwo} from '@services/ContactService';

export const actions = {
  GET_CONTACTS: '@@CONTACTS:GET_CONTACTS',
  GET_CONTACTS_SUCCESS: '@@CONTACTS:GET_CONTACTS_SUCCESS',
  GET_CONTACTS_FAILURE: '@@CONTACTS:GET_CONTACTS_FAILURE',
};

const actionCreators = {
  getContacts: () => async (dispatch: Dispatch<any>) => {
    dispatch({type: actions.GET_CONTACTS});
    const contacts = await fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    .then((response) => response.json())
    .then((responseJson) => responseJson)
    .catch((error) => error);
    if (contacts?.length) {
      dispatch({type: actions.GET_CONTACTS_SUCCESS, payload: {contacts}});
    } else {
      dispatch({type: actions.GET_CONTACTS_FAILURE});
    }
  },
};

export default actionCreators;
