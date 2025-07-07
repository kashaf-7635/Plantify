import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useRef } from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Entypo from '@react-native-vector-icons/entypo';
import { moderateScale, scale } from '../../utils/scaling';
import { useNavigation, useRoute } from '@react-navigation/native';
import Feather from '@react-native-vector-icons/feather';
import Colors from '../../utils/colors';
import DeleteAllCartItems from '../BottomSheets/DeleteAllCartItems';

export default BackHeader = ({ title, cartIcon }) => {
  const navigation = useNavigation();
  const route = useRoute();
  const refDeleteAll = useRef();

  const isCartScreen = route.name === 'Cart';

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
        <TouchableOpacity
          onPress={() =>
            isCartScreen ? refDeleteAll.current.open() : navigation.navigate('Cart')
          }
        >
          <Feather
            name={isCartScreen ? 'trash-2' : 'shopping-cart'}
            color={Colors.textDark}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
      )}

      <DeleteAllCartItems ref={refDeleteAll} />
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scale(20),
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
});
