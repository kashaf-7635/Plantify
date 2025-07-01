import { StyleSheet, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Colors from '../../utils/colors';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
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
    width: '100%',
    alignSelf: 'center',
    marginVertical: verticalScale(10),
     shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  input: {
    borderRadius: scale(10),
    paddingHorizontal: scale(12),
    backgroundColor: Colors.bg,
  },
});
