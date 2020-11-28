import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import '@config/reactotron';
import 'react-native-gesture-handler';

import ContactDetail from './src/screens/ContactDetail';
import ContactList from './src/screens/ContactList';
import store from './src/redux/store';
import {lightGray} from '@constants/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ContactList">
          <Stack.Screen
            name="ContactList"
            component={ContactList}
            options={{
              title: 'Contacts',
              headerStyle: {
                backgroundColor: lightGray,
              },
            }}
          />
          <Stack.Screen
            name="ContactDetail"
            component={ContactDetail}
            options={{
              title: '',
              headerStyle: {
                backgroundColor: lightGray,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
