import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import '@config/reactotron';
import 'react-native-gesture-handler';

import ContactDetail from './src/screens/ContactDetail';
import ContactList from './src/screens/ContactList';
import {Routes} from './src/constants/routes';
import store from './src/redux/store';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Routes.ContactList}>
          <Stack.Screen name={Routes.ContactList} component={ContactList} />
          <Stack.Screen name={Routes.ContactDetail} component={ContactDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
