import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from './style';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function Information() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
      <Text
        style={{
          backgroundColor: 'red',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        hi
      </Text>
    </ImageBackground>
  );
}
