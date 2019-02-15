import { Dimensions } from 'react-native';

const { width , height } = Dimensions.get('window');

export default {
  basePadding: 11,
  baseMargin: 20,
  baseRadius:2,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width
}
