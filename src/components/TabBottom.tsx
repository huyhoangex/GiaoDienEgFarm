import React from 'react'
import {
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import colors from '../components/color';

import Home from '../screens/Home';
import Manage from '../screens/Manage';

const Tab = createBottomTabNavigator();
export default function TabBottom() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: colors.tab,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          shadowOffset: {width: 4, height: 0}, // Đặt đổ bóng theo chiều ngang
          shadowColor: 'rgba(0, 0, 0, 0.05)', // Màu của đổ bóng
          shadowOpacity: 0.5, // Độ mờ của đổ bóng
          shadowRadius: 4, // Bán kính của đổ bóng
          elevation: 10, // Độ cao của đổ bóng (cho Android)
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Manage" component={Manage} />
    </Tab.Navigator>
  );
}