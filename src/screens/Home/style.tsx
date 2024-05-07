import {StyleSheet} from 'react-native';
import colors from '../../components/color';

const styles = StyleSheet.create({
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '108%',
    bottom: '8%',
  },
  //image
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    // backgroundColor: 'red',
    top: '16.5%',
  },
  imageUserBG: {
    width: '100%',
    height: '60%',
  },
  imageUser: {
    top: '17%',
    height: '27%',
    width: '28%',
    position: 'absolute',
  },
  // text
  textContainer: {
    width: '50%',
    alignItems: 'center',
  },
  textName: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
    lineHeight: 24,
    fontSize: 16,
    color: colors.white,
  },
  textfirst: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    lineHeight: 15,
    fontSize: 10,
    color: colors.green,
    marginTop: '1%',
    marginBottom: '4%',
  },
  textsecond: {
    fontFamily: 'Poppins-Bold',
    fontWeight: '700',
  },
  //Rectangle
  containerRectangle: {
    flex: 1,
    top: '10%',

    justifyContent: 'space-around',
  },
  rectangle: {
    // position: 'absolute',
    alignItems: 'center',
  },
  textRectangle: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    lineHeight: 19.36,
    fontWeight: '500',
    position: 'absolute',
    color: colors.white,
    left: '15%',
    top: '5%',
  },
  vector: {
    position: 'absolute',
    top: '25%',
    left: '15%',
  },
  image: {
    position: 'absolute',
    top: '-15%',
    right: '15%',
  },
});

export default styles;
