import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useReducer } from 'react';
import ImageCmp from '../Styled/ImageCmp';
import Poppins from '../Styled/TextCmp/Poppins';
import { moderateScale, scale, verticalScale } from '../../utils/scaling';
import AntDesign from '@react-native-vector-icons/ant-design';
import Colors from '../../utils/colors';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: Math.max(1, state.count - 1) };
    default:
      return state;
  }
}
const CartCard = ({ product }) => {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  return (
    <View style={{ marginVertical: verticalScale(10) }}>
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
            $ {product?.price}
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
                onPress={() => dispatch({ type: 'increment' })}
              >
                <AntDesign
                  name="plus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </TouchableOpacity>
              <View>
                <Poppins color="#000" size={16}>
                  {state.count}
                </Poppins>
              </View>
              <TouchableOpacity
                style={s.box}
                onPress={() => dispatch({ type: 'decrement' })}
              >
                <AntDesign
                  name="minus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                borderBottomColor: Colors.textDark,
                borderBottomWidth: 1,
              }}
            >
              <Poppins>Remove</Poppins>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const s = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
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
