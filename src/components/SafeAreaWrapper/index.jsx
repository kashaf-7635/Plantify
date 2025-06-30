import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { horizontalScale, verticalScale } from '../../utils/scaling';

const SafeAreaWrapper = ({ children }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingTop: verticalScale(insets.top),
        paddingLeft: horizontalScale(insets.left),
        paddingRight: horizontalScale(insets.right),
        backgroundColor: '#FFF',
      }}
    >
      {children}
    </View>
  );
};

export default SafeAreaWrapper;
