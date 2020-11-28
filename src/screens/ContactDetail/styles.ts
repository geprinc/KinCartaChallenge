import {StyleSheet} from 'react-native';
import {screenWidth} from '@constants/dimensions';
import {lightGray} from '@constants/colors';

const starSize = 20;
const imageSize = screenWidth * 0.5;

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: 'white',
  },
  contentContainer: {
    flex: 1,
  },
  mainContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: lightGray,
    paddingBottom: 20,
  },
  largeImage: {
    width: imageSize,
    height: imageSize,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
  },
  star: {
    width: starSize,
    height: starSize,
    marginRight: 10,
  },
  company: {
    color: 'grey',
    marginVertical: 5,
  },
});
