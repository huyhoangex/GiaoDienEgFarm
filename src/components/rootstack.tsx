import LayOut1 from '../components/GetStarted/layout1';
import LayOut2 from '../components/GetStarted/layout2';
import LayOut3 from '../components/GetStarted/layout3';
import LayOut4 from '../components/GetStarted/layout4';
import LogIn from '../components/AuthForm/LogIn';
import Register from '../components/AuthForm/Register';
import Resend from '../components/AuthForm/Resend';
import moduleName from '../assets/img/background';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Layout1" component={LayOut1} />
      <Stack.Screen name="Layout2" component={LayOut2} />
      <Stack.Screen name="Layout3" component={LayOut3} />
      <Stack.Screen name="Layout4" component={LayOut4} />

      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen
        name="Resend"
        component={Resend}
      />
    </Stack.Navigator>
    // <LogIn></LogIn>
  );
}
