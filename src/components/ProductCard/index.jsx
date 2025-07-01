import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import Colors from '../../utils/colors';
import ImageCmp from '../Styled/ImageCmp';
import Poppins from '../Styled/TextCmp/Poppins';
import Philosopher from '../Styled/TextCmp/Philosopher';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={s.main}
      onPress={() => navigation.navigate('Product', { productId: product._id })}
    >
      <View style={[s.row, { flex: 2 }]}>
        <View style={s.titleContainer}>
          <Poppins size={14} weight="semibold">
            {product?.category}
          </Poppins>
          <Philosopher size={32} weight="bold">
            {product?.name}
          </Philosopher>
        </View>
        <View style={s.imageContainer}>
          <ImageCmp source={product?.image} size={100} borderRadius={50} />
        </View>
      </View>
      <View style={[s.row, { flex: 1 }]}>
        <Poppins weight="semibold" size={18}>
          {product?.price}$
        </Poppins>

        <View style={[s.row, s.actions]}>
          <FontAwesome
            name="heart"
            color={Colors.textPrimary}
            size={moderateScale(30)}
          />
          <FontAwesome
            name="shopping-bag"
            color={Colors.textPrimary}
            size={moderateScale(30)}
          />
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Product', { productId: product._id })
            }
          >
            <FontAwesome
              name="arrow-right"
              color={Colors.textPrimary}
              size={moderateScale(30)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;

const s = StyleSheet.create({
  main: {
    alignSelf: 'center',
    padding: scale(15),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(20),
    marginVertical: verticalScale(10),
    height: verticalScale(177),
    width: scale(280),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  titleContainer: {
    flex: 1,
  },
  imageContainer: {},
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actions: {
    flex: 1,
    justifyContent: 'flex-end',
    gap: scale(10),
  },
});
