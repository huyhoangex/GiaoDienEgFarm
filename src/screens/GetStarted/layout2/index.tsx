import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import styles from '../styleLayout234';
import styleBG from '../styleLayout234';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';

export default function Layout2() {
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
            Trace the origin of {'\n'} agricultural products
          </Text>
        </View>
        {/* hinh anh */}
        <View style={styles.imgContainer}>
          <Image
            source={images.layOut2}
            style={styles.image}
          />
        </View>
        {/* noi dung */}
        <View style={styles.contentContainer}>
          <Text style={[styles.text, styles.fontText, styles.content]}>
            The characteristic of blockchain Farm is that the data stored in the
            blockchain will not be overwritten, modified, each data block will
            last forever. Therefore, the application of blockchain technology
            for agriculture solves the problem of confirming information about
            the origin and product quality.
          </Text>
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Layout3')}>
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
