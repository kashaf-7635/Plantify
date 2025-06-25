import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Colors from '../../utils/colors';

const InputCmp = ({ label }) => {
  return (
    <View style={s.container}>
      <Poppins color={Colors.textPrimary}>{label}</Poppins>
      <TextInput style={s.input} />
    </View>
  );
};

export default InputCmp;

const s = StyleSheet.create({
  container: {
    backgroundColor: Colors.bgPrimary,
  },
  input: {},
  label: {},
});
