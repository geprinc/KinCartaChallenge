import {createStore, compose, combineReducers} from 'redux';
import Reactotron from 'reactotron-react-native';

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

const enhancers = [];

if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));

const store = createStore(reducers, compose(...enhancers));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;
