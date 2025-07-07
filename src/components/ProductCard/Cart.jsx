import { StyleSheet, TouchableOpacity, View, } from 'react-native';
import React, { useReducer, useRef, useState } from 'react';
import ImageCmp from '../Styled/ImageCmp';
import Poppins from '../Styled/TextCmp/Poppins';
import { moderateScale, scale, verticalScale } from '../../utils/scaling';
import AntDesign from '@react-native-vector-icons/ant-design';
import Colors from '../../utils/colors';
import CheckBox from '@react-native-community/checkbox';
import DeleteCartItem from '../BottomSheets/DeleteCartItem';


const CartCard = ({ product, isSelected, count, onToggle, onCountChange }) => {
  const refDeleteItem = useRef();

  const increment = () => onCountChange(count + 1);
  const decrement = () => onCountChange(Math.max(1, count - 1));



  return (
    <View style={{ marginVertical: verticalScale(10), flexDirection: 'row', alignItems: 'center', gap: scale(10) }}>

      <CheckBox
        tintColors={{ true: '#000', false: '#000' }}
        disabled={false}
        value={isSelected}
        onValueChange={onToggle}
      />

      <View style={s.main}>
        <View style={s.imageView}>
          <ImageCmp
            source={product.image}
            size={77}
            borderRadius={8}
            resizeMode="cover"
          />
        </View>
        <View style={s.textView}>
          <Poppins color="#000" size={16} textConfig={{ numberOfLines: 1 }}>
            {product?.name} | {product?.category}
          </Poppins>
          <Poppins color={Colors.primary800} size={16} weight="semibold">
            $ {product?.price * count}
          </Poppins>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View style={s.row}>
              <TouchableOpacity
                style={s.box}
                onPress={increment}
              >
                <AntDesign
                  name="plus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </TouchableOpacity>
              <View>
                <Poppins color="#000" size={16}>
                  {count}
                </Poppins>
              </View>
              <TouchableOpacity
                style={s.box}
                onPress={decrement}
              >
                <AntDesign
                  name="minus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => refDeleteItem.current.open()}
              style={{
                borderBottomColor: Colors.textDark,
                borderBottomWidth: 1,
              }}
            >
              <Poppins>Remove</Poppins>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <DeleteCartItem ref={refDeleteItem} />
    </View>
  );
};

export default CartCard;

const s = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
    alignItems: 'center',
    flex: 1,
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    justifyContent: 'center',
    paddingHorizontal: scale(20),
    width: scale(199),
  },

  row: {
    flexDirection: 'row',
    gap: scale(10),
    marginTop: verticalScale(5),
  },

  box: {
    borderWidth: 1.5,
    borderRadius: moderateScale(4),
    borderColor: '#000',
    height: scale(20),
    width: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
  },

});
