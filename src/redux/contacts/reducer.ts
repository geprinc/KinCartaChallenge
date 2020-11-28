import Immutable from 'seamless-immutable';

import {actions} from './actions';

const defaultState = {
  loading: false,
  contacts: [],
  error: null,
};
export default function reducer(state = Immutable(defaultState), action: any) {
  switch (action.type) {
    case actions.GET_CONTACTS: {
      return state.merge({loading: true, error: null});
    }
    case actions.GET_CONTACTS_SUCCESS: {
      return state.merge({loading: false, contacts: action.payload.contacts});
    }
    case actions.GET_CONTACTS_FAILURE: {
      return state.merge({
        loading: false,
        contacts: [],
        error: action.payload.error,
      });
    }
    default: {
      return state;
    }
  }
}
