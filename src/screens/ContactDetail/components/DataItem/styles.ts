import {StyleSheet} from 'react-native';
import {lightGray, darkGray} from '@constants/colors';

const smallSize = 10;

export default StyleSheet.create({
  container: {
    paddingVertical: 20,
    borderBottomColor: lightGray,
    borderBottomWidth: 2,
  },
  textRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: 'lightgray',
    fontWeight: 'bold',
    fontSize: smallSize,
    marginBottom: 10,
  },
  mainText: {
    color: darkGray,
    fontWeight: '600',
  },
  type: {
    color: 'grey',
    fontWeight: '400',
    fontSize: smallSize,
  },
});
