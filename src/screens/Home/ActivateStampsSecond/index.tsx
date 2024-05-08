import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '../../../assets/theme/images';
import { useNavigation } from '@react-navigation/native';
import colors from '../../../components/color';
import LinearGradient from 'react-native-linear-gradient';
export default function Home() {
    const navigation = useNavigation() as any;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{flex: 1, top: '8%'}}>
        {/* title */}
        <View style={styles.title}>
          <TouchableOpacity
            style={styles.goback}
            activeOpacity={0.3}
            onPress={() => navigation.goBack()}>
            <Image style={{width: 8, height: 13}} source={images.iconBack} />
          </TouchableOpacity>
          <Text style={[styles.texttitle, styles.font]}>Activate Stamps</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          {/* Confirm */}
          <Text
            style={[
              styles.font,
              styles.texttitle,
              {color: colors.green, marginVertical: '10%'},
            ]}>
            Confirm
          </Text>

          {/* khung Confirm*/}
          <View style={styles.containerConfirm}>
            {/* items */}
            <Text style={[styles.font, styles.label]}>Action name</Text>
            <TextInput
              style={styles.input}
              placeholder="Activate the stamp"
              placeholderTextColor={colors.white}
            />

            {/* items */}
            <Text style={[styles.font, styles.label]}>Harvest period</Text>
            <TextInput
              style={styles.input}
              placeholder="0008-chuoitieu-23/04/2025"
              placeholderTextColor={colors.white}
            />

            {/* items */}
            <Text style={[styles.font, styles.label]}>
              Starting serial number
            </Text>
            <TextInput
              style={styles.input}
              placeholder="111"
              placeholderTextColor={colors.white}
            />

            {/* items */}
            <Text style={[styles.font, styles.label]}>End serial number</Text>
            <TextInput
              style={styles.input}
              placeholder="143"
              placeholderTextColor={colors.white}
            />

            {/* items */}
            <Text style={[styles.font, styles.label]}>Performed by</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              placeholderTextColor={colors.white}
            />

            {/* items */}
            <Text style={[styles.font, styles.label]}>Intend time</Text>
            <TextInput
              style={styles.input}
              placeholder="23/04/2024"
              placeholderTextColor={colors.white}
            />
          </View>

          {/* button */}
          <View style={{marginTop: '7%'}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('ResendKYC')}>
              <LinearGradient
                locations={[0, 1]}
                colors={['#2AFCFF', '#00FB91']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}>
                <Text style={[styles.resend, styles.font]}>RESEND</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* button */}
          <View style={{marginTop: '3%'}}>
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('ResendKYC')}>
              <View
                style={[
                  styles.gradient,
                  {borderWidth: 1, borderColor: colors.white},
                ]}>
                <Text
                  style={[styles.resend, styles.font, {color: colors.white}]}>
                  Come back
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
