import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';

const Loading = () => {
  return (
    <View style={s.container}>
      <ActivityIndicator size={'large'} color={Colors.textPrimary} />
    </View>
  );
};

export default Loading;

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.bgPrimary,
  },
});
