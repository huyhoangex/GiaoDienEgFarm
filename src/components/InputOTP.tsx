import {View, Text, StyleSheet, ViewStyle} from 'react-native';
import React, {useRef, useState} from 'react';
import Clipboard from '@react-native-clipboard/clipboard';
import OTPTextView from 'react-native-otp-textinput';

export default function InputOTP({style}: {style: ViewStyle}) {
  const input = useRef<OTPTextView>(null);

  const clear = () => input.current?.clear();

  const handleCellTextChange = async (text: string, i: number) => {
    if (i === 0) {
      const clippedText = await Clipboard.getString();
      if (clippedText.slice(0, 1) === text) {
        input.current?.setValue(clippedText, true);
      }
    }
  };

  return (
    <OTPTextView
      ref={input}
      textInputStyle={styles.roundedTextInput}
      handleCellTextChange={handleCellTextChange}
      containerStyle={styles.containInput}
      inputCount={6}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  containInput: {
    justifyContent: 'space-evenly',
    paddingHorizontal: 80,
  },
  roundedTextInput: {
    borderRadius: 5,
    borderWidth: 2,
    borderBottomWidth: 2,
    color: '#01FB91',
    backgroundColor: '#fff',
    height: 50,
    width: 35,
  },
});
