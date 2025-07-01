import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ImageCmp from '../Styled/ImageCmp';
import Poppins from '../Styled/TextCmp/Poppins';
import { scale, verticalScale } from '../../utils/scaling';
import { useNavigation } from '@react-navigation/native';

const SearchCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={s.main}
      onPress={() =>
        navigation.navigate('ProductDetails', {
          productId: product._id,
        })
      }
    >
      <View style={s.imageView}>
        <ImageCmp
          source={product.image}
          size={77}
          borderRadius={8}
          resizeMode="cover"
        />
      </View>
      <View style={s.textView}>
        <Poppins color="#000" size={16} weight="semibold">
          {product?.name} | {product?.category}
        </Poppins>
        <Poppins color="#000" size={16} weight="semibold">
          $ {product?.price}
        </Poppins>
        <Poppins color="#000">156 items Left</Poppins>
      </View>
    </TouchableOpacity>
  );
};

export default SearchCard;

const s = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: verticalScale(10),
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});
