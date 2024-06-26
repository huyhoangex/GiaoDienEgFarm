import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import styles from '../styleLayout234';
import LinearGradient from 'react-native-linear-gradient';
import styleBG from '../styleLayout234';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';


export default function Layout4() {
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styleBG.imageBG}>
      <View style={{flex: 1}}>
        {/* tieu de */}
        <View style={styles.titleContainer}>
          <Text style={[styles.textTitle, styles.text, styles.fontText]}>
            Export agricultural products
          </Text>
        </View>
        {/* hinh anh */}
        <View style={styles.imgContainer}>
          <Image
            source={images.layOut4}
            style={styles.image}
          />
        </View>
        {/* noi dung */}
        <View style={styles.contentContainer}>
          <Text style={[styles.text, styles.fontText, styles.content]}>
            With the features that allow the creation of trust in the strange
            parties, Blockchain Rarm helps minimize the stages in the space,
            complex procedures that take time and effort. All transactions can
            take place quickly and easily with high accuracy.
          </Text>
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Login')}>
            <LinearGradient
              locations={[0, 1]}
              colors={['#2AFCFF', '#00FB91']}
              start={{x: 1, y: 0}}
              end={{x: 0, y: 1}}
              style={styles.gradient}>
              <Text style={[styles.fontText, styles.continue]}>Get Started</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
