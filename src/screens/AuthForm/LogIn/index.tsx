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
import { useNavigation } from '@react-navigation/native';

export default function index() {
  const navigation = useNavigation() as any;
  const [getPasswordVisible, setPasswordVisible] = useState(false);

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

          <LinearGradient
            locations={[0, 1]}
            colors={['rgba(12, 244, 250, 0.2)', 'rgba(25, 151, 153, 0.2)']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            style={styles.gradientInput}>
            <TextInput
              style={[styles.input, styles.fontTextInput]}
              secureTextEntry={getPasswordVisible ? false : true}
              placeholder="Password"
              placeholderTextColor="rgba(255, 255, 255, 0.5)"
            />
            <TouchableOpacity
              style={styles.icon}
              activeOpacity={0.3}
              onPress={() => {
                setPasswordVisible(!getPasswordVisible);
              }}>
              {getPasswordVisible ? (
                <Image source={require('../../../assets/img/view.png')} />
              ) : (
                <Image source={require('../../../assets/img/hide.png')} />
              )}
            </TouchableOpacity>
          </LinearGradient>

          {/* button */}
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.3}
            onPress={() => navigation.navigate('Layout2')}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#2AFCFF', '#00FB91']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}>
              <Text style={styles.login}>Log in</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.textRegister}>
            Do not have an account ?{' '}
            <TouchableOpacity
              style={{height: 16}}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('Register' as any)}>
              <Text style={{color: 'rgba(0, 251, 145, 1)'}}>REGISTER</Text>
            </TouchableOpacity>
          </Text>
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
