import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {Routes} from '@constants/routes';
import contactActions from '@redux/contacts/actions';

import styles from './styles';

const ContactList = ({navigation}: any) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactActions.getContacts());
  }, [dispatch]);

  return (
    <View style={styles.contaienr}>
      <Text>ContactList</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate(Routes.ContactDetail)}>
        <Text>Go to Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactList;
