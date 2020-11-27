import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';

import contacts from './contacts/reducer';

type Contact = {
  name: string;
  favorite: boolean;
};

type Contacts = {
  loading: boolean;
  contacts: Contact[];
};

interface State {
  contacts: Contacts;
}

const reducers = combineReducers<any>({
  contacts,
});

const middlewares = [];
const enhancers = [];

middlewares.push(thunk);
enhancers.push(applyMiddleware(...middlewares));

if (__DEV__) enhancers.push(Reactotron.createEnhancer(true));

const store = createStore(reducers, compose(...enhancers));

if (__DEV__) Reactotron.setReduxStore(store);

export default store;
