import React, {useEffect} from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import actionCreators from '@redux/contacts/actions';
import {Contact} from '@interfaces/contacts';
import {RootStackParamList} from '@interfaces/navigation';
import {StoreState} from '@interfaces/state';

import styles from './styles';
import {createContactList} from './utils';
import ContactItem from './components/ContactItem/index';

type ContactListScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ContactList'
>;

type Props = {
  navigation: ContactListScreenNavigationProp;
};

const ContactList = ({navigation}: Props) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: StoreState) => state.contacts.contacts);
  const loading = useSelector((state: StoreState) => state.contacts.loading);

  useEffect(() => {
    dispatch(actionCreators.getContacts());
  }, [dispatch]);

  const renderItem = ({item}: {item: Contact}) => (
    <ContactItem
      contact={item}
      onPress={async () =>
        navigation.navigate('ContactDetail', {contact: item})
      }
    />
  );

  const renderSectionHeader = ({
    section: {title},
  }: {
    section: {title: string};
  }) => <Text style={styles.header}>{title}</Text>;

  const renderSeparator = () => <View style={styles.separator} />;

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
          ItemSeparatorComponent={renderSeparator}
        />
      ) : (
        <Text>No Contacts</Text>
      )}
    </View>
  );
};

export default ContactList;
