import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import styles from './style';

export default function Home() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={require('../../assets/img/background.png')}
      style={styles.imageBG}>
      <View style={{flex: 1}}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image
            style={styles.imageUserBG}
            source={require('../../assets/img/userbackground.png')}
          />
          <Image
            style={styles.imageUser}
            source={require('../../assets/img/user.png')}
          />

          <View style={styles.textContainer}>
            <Text>name</Text>
            <Text>Production Staff</Text>
            <Text>What do you want to do today?</Text>
          </View>
        </View>

        {/* choice */}
        <View style={{flex: 1, backgroundColor: 'yellow'}}></View>
      </View>
    </ImageBackground>
  );
}
