import React from 'react';
import {View, Text} from 'react-native';
import {DetailItem, Data} from '@interfaces/contacts';

import styles from './styles';

const DataItem = ({item: {title, textItems}}: {item: DetailItem}) => {
  const renderText = (item: Data) => (
    <View style={styles.textRow}>
      <Text style={styles.mainText}>{item.text}</Text>
      {item?.type && <Text style={styles.type}>{item.type}</Text>}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {textItems.map(renderText)}
    </View>
  );
};

export default DataItem;
