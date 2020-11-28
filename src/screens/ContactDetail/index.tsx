import React, {useLayoutEffect} from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';
import imgLarge from '@assets/UserLarge/UserLarge.png';
import starOff from '@assets/FavoriteStar(False)/FavoriteFalse.png';
import starOn from '@assets/FavoriteStar(True)/FavoriteTrue.png';
import {RootStackParamList} from '@interfaces/navigation';

import {genereateDetailList} from './utils';
import styles from './styles';
import DataItem from './components/DataItem/index';

type ContactDetailScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ContactDetail'
>;
type ContactDetailScreenRouteProp = RouteProp<
  RootStackParamList,
  'ContactDetail'
>;

type Props = {
  navigation: ContactDetailScreenNavigationProp;
  route: ContactDetailScreenRouteProp;
};

const ContactDetail = ({route, navigation}: Props) => {
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

  const renderDetailItem = ({item}: any) => (
    <DataItem item={item} key={item.id} />
  );

  const keyExtractor = (item: any) => `${item.id}`;

  return (
    <View style={styles.container}>
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
      <FlatList
        data={detailItems}
        renderItem={renderDetailItem}
        keyExtractor={keyExtractor}
        bounces={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ContactDetail;
