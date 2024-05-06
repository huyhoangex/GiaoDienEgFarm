//GetStarted
import LayOut1 from '../screens/GetStarted/Layout1';
import LayOut2 from '../screens/GetStarted/Layout2';
import LayOut3 from '../screens/GetStarted/Layout3';
import LayOut4 from '../screens/GetStarted/Layout4';
//AuthForm
import LogIn from '../screens/AuthForm/LogIn';
import Register from '../screens/AuthForm/Register';
import ResendOTP from '../screens/AuthForm/Resend/OTP';
import ResendKYC from '../screens/AuthForm/Resend/KYC';
//Home
import Home from '../screens/Home';
import Manage from '../screens/Manage'

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import TabBottom from './TabBottom';

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
<<<<<<< HEAD
      {/* GetStarted */}
      {/* <Stack.Screen name="Layout1" component={LayOut1} />
=======
      <Stack.Screen name="Layout1" component={LayOut1} />
>>>>>>> 8a9aaefd8b25ddd11ca4b2108dc9f7cdb6ff6e1a
      <Stack.Screen name="Layout2" component={LayOut2} />
      <Stack.Screen name="Layout3" component={LayOut3} />
      <Stack.Screen name="Layout4" component={LayOut4} /> */}
      {/* AuthForm */}
      {/* <Stack.Screen name="Login" component={LogIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResendOTP" component={ResendOTP} />
<<<<<<< HEAD
      <Stack.Screen name="ResendKYC" component={ResendKYC} /> */}
      {/* Home */}
      <Stack.Screen name="Home" component={TabBottom} />
      <Stack.Screen name="Manage" component={Manage} />
=======
       {/* <Stack.Screen name="ResendKYC" component={ResendKYC} /> */}
>>>>>>> 8a9aaefd8b25ddd11ca4b2108dc9f7cdb6ff6e1a
    </Stack.Navigator>
  );
}
