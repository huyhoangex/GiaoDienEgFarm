import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Camera, useCameraDevice } from 'react-native-vision-camera';
import styles from './style';
export default function Index() {
    const device = useCameraDevice('back');

    if (device == null) return <ActivityIndicator />;
  return (
    <View style={{flex: 1,}}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
    </View>
  );
}
