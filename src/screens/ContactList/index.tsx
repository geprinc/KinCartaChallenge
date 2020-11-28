import React, {useEffect} from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import {Routes} from '@constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import actionCreators from '@redux/contacts/actions';
import {Contact} from '@interfaces/contacts';

import styles from './styles';
import {createContactList} from './utils';
import ContactItem from './components/ContactItem/index';

const ContactList = ({navigation}: any) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const loading = useSelector((state: any) => state.contacts.loading);

  useEffect(() => {
    dispatch(actionCreators.getContacts());
  }, [dispatch]);

  const renderItem = ({item}: {item: Contact}) => (
    <ContactItem
      contact={item}
      onPress={() => navigation.navigate(Routes.ContactDetail, {contact: item})}
    />
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => <Text style={styles.header}>{title}</Text>;

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : contacts?.length ? (
        <SectionList
          sections={createContactList(contacts)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
        />
      ) : (
        <Text>No Contacts</Text>
      )}
    </View>
  );
};

export default ContactList;
