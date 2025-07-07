import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Poppins from '../../Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import { moderateScale, scale, verticalScale } from '../../../utils/scaling';

const ButtonCmp = ({ children, isLoading, onPress, variant, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        s.btn,
        variant === 'outlined'
          ? {
              borderColor: Colors.primary800,
              borderWidth: 2,
            }
          : variant === 'filled'
          ? {
              backgroundColor: disabled ? '#ABABAB' : Colors.primary800,
            }
          : {},
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <Poppins
          size={18}
          color={variant !== 'filled' ? Colors.primary800 : '#FFF'}
        >
          {children}
        </Poppins>
      )}
    </TouchableOpacity>
  );
};

export default ButtonCmp;

const s = StyleSheet.create({
  btn: {
    height: verticalScale(50),
    width: scale(279),
    borderRadius: moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
