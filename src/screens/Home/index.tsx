import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from '../Home/style';

export default function index() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
        
      </ImageBackground>
  );
}
