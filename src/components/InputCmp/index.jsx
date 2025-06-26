import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Poppins from '../Styled/TextCmp/Poppins';
import Colors from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../utils/scaling';

const InputCmp = ({
  label,
  value,
  onChangeText,
  placeholder,
  multiline = false,
  ...rest
}) => {
  const [inputHeight, setInputHeight] = useState(verticalScale(40));

  return (
    <View style={s.container}>
      <Poppins weight="bold" size={16}>
        {label}
      </Poppins>
      <TextInput
        style={[
          s.input,
          multiline && {
            height: inputHeight,
            textAlignVertical: 'top',
          },
        ]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.textSecondary}
        multiline={multiline}
        onContentSizeChange={e =>
          setInputHeight(e.nativeEvent.contentSize.height + verticalScale(12))
        }
        {...rest}
      />
    </View>
  );
};

export default InputCmp;

const s = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
  },
  input: {
    borderWidth: 2,
    borderColor: Colors.textPrimary,
    borderRadius: horizontalScale(10),
    paddingHorizontal: horizontalScale(12),
    paddingVertical: verticalScale(12),
    fontSize: verticalScale(14),
    color: Colors.textPrimary,
    backgroundColor: Colors.bgPrimary,
  },
});
