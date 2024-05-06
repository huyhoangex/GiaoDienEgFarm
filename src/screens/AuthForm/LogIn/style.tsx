import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../components/color';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  //font
  fontTextInput: {
    fontFamily: 'IBMPlexSans-Regular',
  },
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  // logo
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: '2%',
    marginBottom: '1%',
  },
  logo: {},
  // form
  formContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientInput: {
    width: 334,
    height: 50,
    marginBottom: 12,
    borderRadius: 5,
    shadowColor: 'rgba(42, 252, 255, 0.05)',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  input: {
    width: 300,
    height: 50,
    color: colors.white,
    borderRadius: 5,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  icon: {
    position: 'absolute',
    width: 24,
    height: 24,
    top: '25%',
    right: '5%',
  },
  //button
  button: {
    height: 50,
    width: 192,
    marginHorizontal: 'auto',
    borderRadius: 23.5,
    marginTop: 15,
    marginBottom: 26,
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  login: {
    fontFamily: 'IBMPlexSans-Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 23,
    color: 'black',
  },
  //textRegister
  textRegister: {
    fontFamily: 'IBMPlexSans-Medium',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 17,
    color: colors.white,
  },
  // bottom
  bottomContainer: {
    flex: 1,
    alignItems: 'center',
    top: 50,
  },
  bottomIMG: {},
});
export default styles;
