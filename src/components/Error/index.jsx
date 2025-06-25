import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';
import Poppins from '../Styled/TextCmp/Poppins';

const Error = ({ message }) => {
  return (
    <View style={s.container}>
      <ActivityIndicator size={'large'} color={Colors.textPrimary} />
      <Poppins weight="bold" size={16}>
        {message}
      </Poppins>
    </View>
  );
};

export default Error;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.bgPrimary,
  },
});
