import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';
import { moderateScale, verticalScale } from '../../utils/scaling';
import Fonts from '../../utils/fonts';

const OutlinedInput = ({
  placeholder,
  onChangeText,
  onBlur,
  value,
  iconCmp,
  ...rest
}) => {
  return (
    <View style={s.container}>
      <View style={s.inputView}>
        <TextInput
          placeholderTextColor={Colors.textDark}
          style={s.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          {...rest}
        />
      </View>
      {iconCmp && <View style={s.icon}>{iconCmp}</View>}
    </View>
  );
};

export default OutlinedInput;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: Colors.textDark,
    borderBottomWidth: 2,
    marginVertical: verticalScale(10),
    height: verticalScale(33),
  },
  inputView: {
    flex: 1,
  },
  input: {
    color: Colors.textDark,
    fontSize: moderateScale(16),
    fontFamily: Fonts.Poppins.regular,
    flex: 1,
    paddingVertical: 0,
    lineHeight: moderateScale(22),
  },
  icon: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
