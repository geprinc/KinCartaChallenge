import {StyleSheet} from 'react-native';
import {lightGray} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: lightGray,
    color: 'gray',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 10,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '90%',
    backgroundColor: lightGray,
  },
});
