import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import Colors from '../../utils/colors';
import { useNavigation } from '@react-navigation/native';

const SquareCard = ({ product }) => {

  
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={s.card}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          productId: product._id,
        })
      }
    >
      <View style={s.imageContainer}>
        <Image style={s.image} source={{ uri: product?.image }} />
      </View>
      <View
        style={{
          paddingHorizontal: scale(5),
          paddingVertical: verticalScale(10),
        }}
      >
        <Poppins weight="semibold" size={16}>
          {product?.name}
        </Poppins>
        <Poppins color="#7D7B7B">{product?.category}</Poppins>
        <Poppins color={Colors.primary800} size={16} weight="semibold">
          $ {product?.price}
        </Poppins>
      </View>
    </TouchableOpacity>
  );
};

export default SquareCard;

const s = StyleSheet.create({
  card: {
    width: scale(155),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    marginRight: scale(20),
    marginTop: verticalScale(20),
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(134),
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
