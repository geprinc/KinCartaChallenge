import React, {useLayoutEffect} from 'react';
import {ScrollView, View, Text, Image} from 'react-native';
import imgLarge from '@assets/UserLarge/UserLarge.png';
import starOff from '@assets/FavoriteStar(False)/FavoriteFalse.png';
import starOn from '@assets/FavoriteStar(True)/FavoriteTrue.png';

import {genereateDetailList} from './utils';
import styles from './styles';
import DataItem from './components/DataItem/index';

const ContactDetail = ({route, navigation}: any) => {
  const {contact} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image
          source={contact.isFavorite ? starOn : starOff}
          style={styles.star}
        />
      ),
    });
  }, [navigation, contact]);

  const detailItems = genereateDetailList(contact);

  const renderDetailItem = (item: any) => <DataItem item={item} />;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.container}
      bounces={false}>
      <View style={styles.mainContainer}>
        <Image
          source={
            contact?.largeImageURL ? {uri: contact.largeImageURL} : imgLarge
          }
          style={styles.largeImage}
        />
        <Text style={styles.name}>{contact.name}</Text>
        {contact?.companyName && (
          <Text style={styles.company}>{contact.companyName}</Text>
        )}
      </View>
      {detailItems.map(renderDetailItem)}
    </ScrollView>
  );
};

export default ContactDetail;
