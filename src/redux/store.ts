import {createStore, combineReducers} from 'redux';

import contacts from './contacts/reducer';

type Contact = {
  name: string;
  favorite: boolean;
};

interface State {
  contacts: Contact[];
}

const reducers = combineReducers<State>({
  contacts,
});

// in dev mode, we'll create the store through Reactotron
const store = createStore(reducers);

export default store;
