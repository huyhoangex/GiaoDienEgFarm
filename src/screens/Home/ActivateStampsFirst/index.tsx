import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
import OTPTextView from 'react-native-otp-textinput';
import Clipboard from '@react-native-clipboard/clipboard';
import {useNavigation} from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import {images} from '../../../assets/theme/images';
import Title from '../../../components/Title';
import {Camera, useCameraDevice} from 'react-native-vision-camera';

export default function Index() {
  const navigation = useNavigation() as any;
  const input = useRef<OTPTextView>(null);
  const handleCellTextChange = async (text: any, i: any) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };
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
        {/* secsion */}
        <View style={{flex: 1}}>
          {/* text */}
          <View>
            <Text style={styles.textfirst}>
              You want to activate the stamp for
            </Text>
          </View>
          {/* input Harvest period */}
          <View style={[styles.inputcontent]}>
            <Text style={[styles.labelfirts, styles.textlable]}>
              Harvest period
            </Text>
            <TextInput
              style={[styles.input]}
              placeholder="0008-chuoitieu-23/04/2024"
              placeholderTextColor="rgba(255, 255, 255, 1)"
            />
          </View>
          <Text style={[styles.notestamp]}>
            The range of stamps you have is: 168 to 999;
          </Text>
          {/* Starting serial number */}
          <View style={[styles.inputcontent]}>
            <Text style={[styles.labelsecond, styles.textlable]}>
              Starting serial number
            </Text>
            <TextInput
              style={[styles.input]}
              placeholder="168"
              placeholderTextColor="rgba(255, 255, 255, 1)"
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.scanseri}>
              <Image source={images.iconscanseri} />
            </TouchableOpacity>
          </View>

          {/* End serial number */}
          <View style={[styles.inputcontentsecond]}>
            <Text style={[styles.labelthird, styles.textlable]}>
              End serial number
            </Text>
            <TextInput
              style={[styles.input]}
              placeholder="999"
              placeholderTextColor="rgba(255, 255, 255, 1)"
            />
            <TouchableOpacity activeOpacity={0.7} style={styles.scanseri}>
              <Image source={images.iconscanseri} />
            </TouchableOpacity>
          </View>
          {/* button Activate Stamps */}
          <View style={styles.containerButon}>
            {/* button  */}
            <TouchableOpacity
              style={styles.button}
              activeOpacity={0.3}
              onPress={() => navigation.navigate('ActivateStampsSecond')}>
              <LinearGradient
                locations={[0, 1]}
                colors={['#2AFCFF', '#00FB91']}
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                style={styles.gradient}>
                <Text style={[styles.stamp, styles.font]}>Activate Stamps</Text>
              </LinearGradient>
            </TouchableOpacity>
            {/* button cancel */}
            <TouchableOpacity
              style={[styles.button, styles.buttoncancel]}
              activeOpacity={0.3}
              onPress={() => navigation.goBack()}>
              <Text style={[styles.cancel, styles.font]}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
