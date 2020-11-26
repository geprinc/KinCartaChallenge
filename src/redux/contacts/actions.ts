import {createTypes, completeTypes} from 'redux-recompose';
import {getContacts} from '../../services/ContactService';

export const actions = createTypes(
  completeTypes(['GET_CONTACTS']),
  '@@CONTACTS',
);

const targets = {
  CONTACTS: 'contacts',
};

const actionCreators = {
  getContacts: () => ({
    type: actions.GET_CONTACTS,
    target: targets.CONTACTS,
    service: getContacts,
  }),
};

export default actionCreators;
