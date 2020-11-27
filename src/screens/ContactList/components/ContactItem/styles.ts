import {StyleSheet} from 'react-native';
import {darkGray} from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginVertical: 10,
  },
  innerContainer: {
    paddingVertical: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  lowerBorder: {
    borderBottomColor: darkGray,
    borderBottomWidth: 1,
  },
  contactImage: {
    marginRight: 20,
    width: 60,
    height: 60,
  },
  star: {
    width: 20,
    height: 20,
  },
  textContainer: {
    marginLeft: 5,
  },
});
