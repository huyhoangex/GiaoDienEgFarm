import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import {images} from '../../assets/theme/images';


export default function Home() {
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images.backGround}
      style={styles.imageBG}>
      <View style={{flex: 1}}>
        {/* image */}
        <View style={styles.imageContainer}>
          <Image style={styles.imageUserBG} source={images.userBackGround} />
          <Image style={styles.imageUser} source={images.user} />

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
              style={{width: '85%', height: 100}}
              source={images.backGroundRectangle}></Image>
            <Text style={styles.textRectangle}>Add production log</Text>
            <Image style={styles.vector} source={images.vector}></Image>
            <Image style={styles.image} source={images.imgHome1}></Image>
          </TouchableOpacity>

          {/* item */}
          <TouchableOpacity activeOpacity={0.7} style={styles.rectangle}>
            <Image
              style={{width: '85%', height: 100}}
              source={images.backGroundRectangle}></Image>
            <Text style={styles.textRectangle}>Activate Stamps</Text>
            <Image style={styles.vector} source={images.vector}></Image>
            <Image style={styles.image} source={images.imgHome2}></Image>
          </TouchableOpacity>

          {/* item */}
          <TouchableOpacity activeOpacity={0.7} style={styles.rectangle}>
            <Image
              style={{width: '85%', height: 100}}
              source={images.backGroundRectangle}></Image>
            <Text style={styles.textRectangle}>Pile of pillows</Text>
            <Image style={styles.vector} source={images.vector}></Image>
            <Image style={styles.image} source={images.imgHome3}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
