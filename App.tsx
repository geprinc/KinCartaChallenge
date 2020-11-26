import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ContactDetail from './src/screens/ContactDetail';
import ContactList from './src/screens/ContactList';
import {Routes} from './src/constants/routes';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Routes.ContactList}>
        <Stack.Screen name={Routes.ContactList} component={ContactList} />
        <Stack.Screen name={Routes.ContactDetail} component={ContactDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
