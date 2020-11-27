import {Dispatch} from 'react';

export const actions = {
  GET_CONTACTS: '@@CONTACTS:GET_CONTACTS',
  GET_CONTACTS_SUCCESS: '@@CONTACTS:GET_CONTACTS_SUCCESS',
  GET_CONTACTS_FAILURE: '@@CONTACTS:GET_CONTACTS_FAILURE',
};

function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

const actionCreators = {
  getContacts: () => async (dispatch: Dispatch<any>) => {
    dispatch({type: actions.GET_CONTACTS});
    return fetch(
      'https://s3.amazonaws.com/technical-challenge/v3/contacts.json',
    )
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: actions.GET_CONTACTS_SUCCESS,
          payload: {contacts: json},
        });
        return json.products;
      })
      .catch((error) =>
        dispatch({type: actions.GET_CONTACTS_FAILURE, payload: {error}}),
      );
  },
};

export default actionCreators;
