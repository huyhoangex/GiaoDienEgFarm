import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../components/color';

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
    borderColor: 'rgba(255,255,255,0.3)',
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
  // text first
  textfirst: {
    fontFamily: 'IBMPlexSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 16,
    lineHeight: 19,
    color: '#01FB91',
    marginTop: '7%',
    marginLeft: 36,
  },
  // input
  inputcontent: {
    width: '100%',
    alignItems: 'center',
    marginTop: '8%',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    fontSize: 13,
    lineHeight: 19.5,
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(6, 100, 153, 0.3)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    width: '85%',
    paddingLeft: '3%',
    borderRadius: 10,
  },
  tick: {
    flex: 1,
    position: 'absolute',
    left: '81%',
    top: '30%',
    width: '5%',
    height: '44%',
  },
});
export default styles;
