import LayOut1 from '../screens/GetStarted/layout1';
import LayOut2 from '../screens/GetStarted/layout2';
import LayOut3 from '../screens/GetStarted/layout3';
import LayOut4 from '../screens/GetStarted/layout4';
import LogIn from '../screens/AuthForm/LogIn';
import Register from '../screens/AuthForm/Register';
import ResendOTP from '../screens/AuthForm/Resend/OTP/Index';
import ResendKYC from '../screens/AuthForm/Resend/KYC/Index';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="ResendKYC"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <Stack.Screen name="Layout1" component={LayOut1} />
      <Stack.Screen name="Layout2" component={LayOut2} />
      <Stack.Screen name="Layout3" component={LayOut3} />
      <Stack.Screen name="Layout4" component={LayOut4} />

      <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} /> */}
      <Stack.Screen name="ResendOTP" component={ResendOTP} />
      <Stack.Screen name="ResendKYC" component={ResendKYC} />
    </Stack.Navigator>
    // <LogIn></LogIn>
  );
}
