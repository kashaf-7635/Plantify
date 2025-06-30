import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/scaling';
import Colors from '../../utils/colors';

const SquareCard = ({ product }) => {
  return (
    <View style={s.card}>
      <View style={s.imageContainer}>
        <Image style={s.image} source={{ uri: product?.image }} />
      </View>
      <View
        style={{
          paddingHorizontal: horizontalScale(5),
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
    </View>
  );
};

export default SquareCard;

const s = StyleSheet.create({
  card: {
    width: horizontalScale(155),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    marginRight: horizontalScale(20),
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
