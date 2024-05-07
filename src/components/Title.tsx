import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import colors from './color';
import {images} from '../assets/theme/images';

interface TitleProps {
    text: string;
  }
const Title: React.FC<TitleProps> = ({
  text,
}) => {
    const navigation = useNavigation() as any;
  return (
    <View style={styles.title}>
      <TouchableOpacity
        style={styles.goback}
        activeOpacity={0.3}
        onPress={() => navigation.goback()}>
        <Image
          style={{width: 8, height: 13}}
          source={images.iconBack}></Image>
      </TouchableOpacity>
      <Text style={[styles.texttitle, styles.font]}>{text}</Text>
    </View>
  );
}

export default Title
const styles = StyleSheet.create({
  font: {
    fontFamily: 'IBMPlexSans-Bold',
    fontWeight: '700',
  },
  // thanh tiêu đề
  title: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: '3%',
    alignItems: 'center',
    height: '6%',
  },
  goback: {},
  texttitle: {
    fontSize: 20,
    lineHeight: 19,
    top: '1%',
    marginLeft: '5%',
    color: colors.white,
  },
  content: {
    flex: 1,
  },
});