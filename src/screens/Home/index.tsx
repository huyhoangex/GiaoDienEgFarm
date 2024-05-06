import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import styles from '../Home/style';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export default function index() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </ImageBackground>
  );
}
