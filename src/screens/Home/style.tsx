import {StyleSheet} from 'react-native';

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
backgroundColor: 'red',
    top: '16.5%',
  },
  imageUserBG: {
    width: '100%',
    height: '45%',
  },
  imageUser: {
    top: '13%',
    height: '20%',
    width: '28%',
    position: 'absolute',
  },
  // text
  textContainer: {
    backgroundColor: 'blue',
    alignItems: 'center'
  },
});

export default styles;
