import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';
import {Routes} from '../../constants/routes';

const ContactList = ({navigation}: any) => (
  <View style={styles.contaienr}>
    <Text>ContactList</Text>
    <TouchableOpacity onPress={() => navigation.navigate(Routes.ContactDetail)}>
      <Text>Go to Detail</Text>
    </TouchableOpacity>
  </View>
);

export default ContactList;
