import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../../components/color';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  // background
  imageBG: {
    flex: 1,
    width: '100%',
    height: '108%',
    bottom: '8%',
  },
  font: {
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
  },
  title: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: '3%',
    alignItems: 'center',
    height: '6%',
  },
  goback: {},
  texttitle: {
    fontSize: 20,
    lineHeight: 19,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  content: {
    flex: 1,
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
  resend: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
  textselect: {
    fontSize: 15,
    lineHeight: 19,
    color: colors.white,
    // top: 23,
    // left:29,
    marginTop: 23,
    marginLeft: 29,
  },
  selectid: {
    width: 200,
    height: 200,
  },
});
export default styles;
