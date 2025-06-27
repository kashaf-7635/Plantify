import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import { horizontalScale } from '../../../utils/scaling';

const HomeScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={s.main}>
        <Philosopher size={20} color="#000" weight="bold">
          Discover Your Plant
        </Philosopher>
      </View>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  main: {
    paddingHorizontal: horizontalScale(20),
  },
});
