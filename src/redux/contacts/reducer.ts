import {createReducer, completeReducer, completeState} from 'redux-recompose';
import immutable from 'seamless-immutable';

import {actions} from './actions';

const stateDescription = {
  banks: [],
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.GET_CONTACTS],
};

export default createReducer(
  immutable(initialState),
  completeReducer(reducerDescription),
);
