import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SectionList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {Routes} from '@constants/routes';

import styles from './styles';
import {createContactList} from './utils';

const ContactList = ({navigation}: any) => {
  const [contacts, setContacts] = useState<any>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
      .then((response) => response.json())
      .then((responseJson) => {
        setContacts(createContactList(responseJson));
        setLoading(false);
      });
  }, [setContacts, setLoading]);

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(Routes.ContactDetail, {item})}>
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );

  console.log(contacts);
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : contacts?.length ? (
        <SectionList
          sections={contacts}
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
