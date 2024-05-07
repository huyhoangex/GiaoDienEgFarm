import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';

import TextGradient from '../../../components/TextGradient';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import styleBG from '../styleLayout234';
import {useNavigation} from '@react-navigation/native';
import {images} from '../../../assets/theme/images';

export default function Layout1() {
  const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styleBG.imageBG}>
      <View style={{flex: 1}}>
        {/* tieu de */}
        <View style={styles.titleContainer}>
          <Text style={[styles.title, styles.text, styles.fontText]}>
            welcome To
          </Text>
          <TextGradient
            style={[styles.BlockchainFarm, styles.text]}
            text={`Blockchain \n Farm`}
            locations={[0, 1]}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2AFCFF', '#00FB91']}
          />
        </View>
        {/* hinh anh */}
        <View style={styles.imageContainer}>
          <Image
            source={images.layOut1}
            style={styles.image}
          />
        </View>
        {/* noi dung */}
        <View style={styles.contentContainer}>
          <Text style={[styles.text, styles.fontText, styles.content]}>
            Transparent and highly secure agricultural product traceability
            solution using Blockchain technology
          </Text>
        </View>
        {/* button */}
        <View style={styles.buttonContainer}>
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
              <Text style={[styles.fontText, styles.continue]}>Continue</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
