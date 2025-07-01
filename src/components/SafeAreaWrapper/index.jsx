import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';

const SafeAreaWrapper = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: verticalScale(insets.top),
        paddingLeft: scale(insets.left),
        paddingRight: scale(insets.right),
        backgroundColor: '#FFF',
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaWrapper;
