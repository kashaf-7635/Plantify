import { StyleSheet, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Colors from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../utils/scaling';
import { Picker } from '@react-native-picker/picker';

const DropdownCmp = ({ label, value, setValue, items }) => {
  return (
    <View style={s.container}>
      <Poppins weight="bold" size={16}>
        {label}
      </Poppins>
      <View style={s.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue, itemIndex) => setValue(itemValue)}
        >
          {items.map(item => {
            return (
              <Picker.Item
                label={item.label}
                value={item.value}
              />
            );
          })}
        </Picker>
      </View>
    </View>
  );
};

export default DropdownCmp;

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
    backgroundColor: Colors.bgPrimary,
  },
});
