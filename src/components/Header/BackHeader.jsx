import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Entypo from '@react-native-vector-icons/entypo';
import Feather from '@react-native-vector-icons/feather';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/colors';

const BackHeader = ({ title, cartIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={moderateScale(20)} />
      </TouchableOpacity>

      <View style={s.titleView}>
        <Poppins weight="semibold" color="#000" size={16}>
          {title}
        </Poppins>
      </View>
      {cartIcon && (
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Feather
            name="shopping-cart"
            color={Colors.textDark}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default BackHeader;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(20),
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
});
