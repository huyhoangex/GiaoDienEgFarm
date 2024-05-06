import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
  } from 'react-native';
  import React, {useRef, useState} from 'react';
  import styles from './style';
  import LinearGradient from 'react-native-linear-gradient';
  import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
  import TextGradient from '../../../../components/TextGradient';
  import OTPTextView from 'react-native-otp-textinput';
  import Clipboard from '@react-native-clipboard/clipboard';
  import InputOTP from '../../../../components/InputOTP';
  import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
=======
  
>>>>>>> parent of a15ef6c (Merge branch 'main' of https://github.com/H-Thien11/GiaoDienEgfarm)
  
  
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
        source={require('../../../../assets/img/background.png')}
        style={styles.imageBG}>
        <View style={{flex: 1, top: '8%'}}>
          {/* thanh tiêu đề */}
          <View style={styles.title}>
            <TouchableOpacity
              style={styles.goback}
              activeOpacity={0.3}
              onPress={() => navigation.goback()}>
              <Image
                style={{width: 8, height: 13}}
                source={require('../../../../assets/img/back.png')}></Image>
            </TouchableOpacity>
            <Text style={[styles.texttitle, styles.font]}>
              KYC
            </Text>
          </View>
          <View>
            <View>
<<<<<<< HEAD
              <Text style={[styles.textselect, styles.font]}>
                Select your ID type
              </Text>
              <View style={{flex: 1}}>
                
              </View>
=======
              <Text style={[styles.textselect, styles.font]}>Select your ID type</Text>
>>>>>>> parent of a15ef6c (Merge branch 'main' of https://github.com/H-Thien11/GiaoDienEgfarm)
            </View>
          
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
                <Text style={[styles.resend, styles.font]}>RESEND</Text>
                </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>            

      </ImageBackground>
    );
  }
  