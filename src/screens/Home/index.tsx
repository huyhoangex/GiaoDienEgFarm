import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
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
            <Text style={styles.textName}>Name</Text>
            <Text style={styles.textfirst}>Production Staff</Text>
            <Text style={[styles.textfirst, styles.textsecond]}>
              What do you want to do today?
            </Text>
          </View>
        </View>

        {/* choice */}
        <View style={styles.containerRectangle}>
          {/* item */}
          <TouchableOpacity activeOpacity={0.7} style={styles.rectangle}>
            <Image
              style={{width: '85%', height: '46%'}}
              source={require('../../assets/img/rectangle.png')}></Image>
            <Text style={styles.textRectangle}>Add production log</Text>
            <Image
              style={styles.vector}
              source={require('../../assets/img/vector.png')}></Image>
            <Image
              style={styles.image}
              source={require('../../assets/img/imgHome1.png')}></Image>
          </TouchableOpacity>

          {/* item */}
          <TouchableOpacity activeOpacity={0.7} style={styles.rectangle}>
            <Image
              style={{width: '85%', height: '45%'}}
              source={require('../../assets/img/rectangle.png')}></Image>
            <Text style={styles.textRectangle}>Activate Stamps</Text>
            <Image
              style={styles.vector}
              source={require('../../assets/img/vector.png')}></Image>
            <Image
              style={styles.image}
              source={require('../../assets/img/imgHome2.png')}></Image>
          </TouchableOpacity>

          {/* item */}
          <TouchableOpacity activeOpacity={0.7} style={styles.rectangle}>
            <Image
              style={{width: '85%', height: '45%'}}
              source={require('../../assets/img/rectangle.png')}></Image>
            <Text style={styles.textRectangle}>Pile of pillows</Text>
            <Image
              style={styles.vector}
              source={require('../../assets/img/vector.png')}></Image>
            <Image
              style={styles.image}
              source={require('../../assets/img/imgHome3.png')}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
