import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function Register() {
  const navigation = useNavigation() as any;

  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../../assets/img/background.png')}
      style={styles.imageBG}>
      <View style={{flex: 1}}>
        {/* logo */}
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../../../assets/img/logoblockchain.png')}
          />
        </View>
        {/* input */}
        <View style={styles.formContainer}>
          {/* First and last name */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              placeholder="First and last name"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>
          {/* Address */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              placeholder="Address"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>
          {/* CMND Or CCCD */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              placeholder="CMND Or CCCD"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>
          {/* Phone */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              placeholder="Phone"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>
          {/* Year of Birth */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              placeholder="Year of Birth"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>
          {/* Password */}
          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
          </LinearGradient>

          {/* button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => navigation.navigate('ResendOTP')}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#2AFCFF', '#00FB91']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}>
              <Text style={styles.login}>Register</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {/* bottom */}
        <View style={styles.bottomContainer}>
          <Image
            style={styles.bottomIMG}
            source={require('../../../assets/img/bottom.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
}
