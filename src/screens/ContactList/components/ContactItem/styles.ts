import {StyleSheet} from 'react-native';
import {darkGray} from '@constants/colors';

const starSize = 16;
const imageSize = 60;

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginVertical: 10,
  },
  innerContainer: {
    paddingVertical: 20,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  contactImage: {
    marginRight: 20,
    width: imageSize,
    height: imageSize,
  },
  star: {
    marginTop: 4,
    width: starSize,
    height: starSize,
  },
  textContainer: {
    marginLeft: 5,
  },
  name: {
    fontSize: 18,
    color: darkGray,
  },
  address: {
    fontSize: 12,
    color: 'gray',
  },
});
