import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import icFavorite from '@assets/FavoriteStar(True)/FavoriteTrue.png';
import imgDefault from '@assets/UserSmall/UserIconSmall.png';

import {Contact} from '../../utils';
import styles from './styles';

interface Props {
  contact: Contact;
  onPress: () => {};
  isLast?: boolean;
}

const ContactItem = ({contact, onPress, isLast}: Props) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.innerContainer, !isLast && styles.lowerBorder]}>
      <Image
        source={
          contact.smallImageUrl ? {uri: contact.smallImageUrl} : imgDefault
        }
        style={styles.contactImage}
      />
      {contact.isFavorite ? (
        <Image source={icFavorite} style={styles.star} />
      ) : (
        <View style={styles.star} />
      )}
      <View style={styles.textContainer}>
        <Text>{contact.name}</Text>
        {contact.address.street && <Text>{contact.address.street}</Text>}
      </View>
    </View>
  </TouchableOpacity>
);

export default ContactItem;
