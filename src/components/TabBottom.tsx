import { View, Text } from 'react-native'
import React from 'react'
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import Manage from '../screens/Manage';

const Tab = createBottomTabNavigator();
export default function TabBottom() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Manage" component={Manage} />
    </Tab.Navigator>
  );
}