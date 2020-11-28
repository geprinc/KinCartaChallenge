import React from 'react';
import {View, Text, Image} from 'react-native';
import imgLarge from '@assets/UserLarge/UserLarge.png';

import {genereateDetailList} from './utils';
import styles from './styles';
import DataItem from './components/DataItem/index';

const ContactDetail = ({route}: any) => {
  const {contact} = route.params;

  const detailItems = genereateDetailList(contact);

  const renderDetailItem = (item: any) => <DataItem item={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image
          source={
            contact?.largeImageURL ? {uri: contact.largeImageURL} : imgLarge
          }
          style={styles.largeImage}
        />
        <Text></Text>
        <Text></Text>
      </View>
      {detailItems.map(renderDetailItem)}
    </View>
  );
};

export default ContactDetail;
