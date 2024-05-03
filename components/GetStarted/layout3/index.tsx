import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import React from 'react';

import styles from '../styleLayout234';
import styleBG from '../styleLayout234';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

export default function layout3() {
  const navigation = useNavigation();
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../../assets/img/background.png')}
      style={styleBG.imageBG}>
      <View style={{flex: 1}}>
        {/* tieu de */}
        <View style={styles.titleContainer}>
          <Text style={[styles.textTitle, styles.text, styles.fontText]}>
            Financial instruments
          </Text>
        </View>
        {/* hinh anh */}
        <View style={styles.imgContainer}>
          <Image
            source={require('../../../assets/img/layout3.png')}
            style={styles.image}
          />
        </View>
        {/* noi dung */}
        <View style={styles.contentContainer}>
          <Text style={[styles.text, styles.fontText, styles.content]}>
            Activities on blockchain Farm are automatically, this helps to
            reduce costs from normal manual operating stages. Smart contracts
            (Smart Contract) minimize errors in processes.
          </Text>
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Layout4')}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#2AFCFF', '#00FB91']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}>
              <Text style={[styles.fontText, styles.continue]}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
