import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/scaling';

const ButtonCmp = ({ children, isLoading, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={s.btn}>
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Poppins size={18} color="#FFF">
          {children}
        </Poppins>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCmp;

const s = StyleSheet.create({
  btn: {
    backgroundColor: '#2D5523',
    height: verticalScale(72),
    width: horizontalScale(327),
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(10),
  },
});
