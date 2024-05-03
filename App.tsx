import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './assets/rootstack';
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}


