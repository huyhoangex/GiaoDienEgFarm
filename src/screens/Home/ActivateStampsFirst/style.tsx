import {StyleSheet} from 'react-native';
import colors from '../../../components/color';

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
  textlable: {
    fontFamily: 'Poppins-Regular',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: '1.5%',
  },
  labelfirts: {
    marginRight: '65%',
  },
  labelsecond: {
    marginRight: '52%',
  },
  labelthird: {
    marginRight: '58%',
  },
  inputcontentsecond: {
    width: '100%',
    alignItems: 'center',
    marginTop: '5%',
  },
  inputcontent: {
    width: '100%',
    alignItems: 'center',
    marginTop: '13%',
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
  scanseri: {
    flex: 1,
    position: 'absolute',
    left: '84%',
    top: '45%',
    width: '7%',
    height: '45%',
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // notestamp
  notestamp: {
    fontFamily: 'IBMPlexSans-Regular',
    fontWeight: '400',
    fontStyle: 'italic',
    fontSize: 10,
    lineHeight: 19,
    color: 'rgba(139, 139, 139, 1)',
    marginLeft: '6%',
    marginTop: '3%',
  },
  //button
  containerButon: {
    alignItems: 'center',
    marginTop: '20%',
  },
  button: {
    height: 50,
    width: 277,
    marginHorizontal: 'auto',
    borderRadius: 23.5,
  },
  buttoncancel: {
    marginTop: '3%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 23.5,
    height: '100%',
    width: '100%',
  },
  stamp: {
    fontSize: 20,
    lineHeight: 23,
    color: 'black',
  },
  cancel: {
    fontSize: 20,
    lineHeight: 23,
    color: 'rgba(255, 255, 255, 1)',
  },
  //
});
export default styles;
