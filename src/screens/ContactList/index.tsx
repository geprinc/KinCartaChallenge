import React, {useEffect} from 'react';
import {View, Text, SectionList, ActivityIndicator} from 'react-native';
import {Routes} from '@constants/routes';
import {useSelector, useDispatch} from 'react-redux';
import actionCreators from '@redux/contacts/actions';

import styles from './styles';
import {Contact, createContactList} from './utils';
import ContactItem from './components/ContactItem/index';

const ContactList = ({navigation}: any) => {
  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state.contacts.contacts);
  const loading = useSelector((state: any) => state.contacts.loading);
  // const [contacts, setContacts] = useState<any>([]);

  useEffect(() => {
    dispatch(actionCreators.getContacts());
    // setLoading(true);
    // fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     setContacts(createContactList(responseJson));
    //     setLoading(false);
    //   });
  }, [dispatch]);

  const renderItem = ({item}: {item: Contact}) => (
    <ContactItem
      contact={item}
      onPress={() => navigation.navigate(Routes.ContactDetail, {item})}
    />
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : contacts?.length ? (
        <SectionList
          sections={createContactList(contacts)}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          renderSectionHeader={({section: {title}}) => (
            <Text style={styles.header}>{title}</Text>
          )}
        />
      ) : (
        <Text>Nothing</Text>
      )}
    </View>
  );
};

export default ContactList;
