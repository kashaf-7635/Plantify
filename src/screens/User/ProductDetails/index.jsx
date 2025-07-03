import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useReducer, useState } from 'react';
import { useProductQuery } from '../../../services/productsApi';
import Loading from '../../../components/Loading';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import { moderateScale, scale, verticalScale } from '../../../utils/scaling';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import AntDesign from '@react-native-vector-icons/ant-design';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: Math.max(0, state.count - 1) };
    default:
      return state;
  }
}

const ProductDetails = ({ route }) => {
  console.log(route?.params);

  const productId = route?.params?.productId;

  const [state, dispatch] = useReducer(reducer, { count: 0 });
  const { data, isLoading, isFetching, error, isSuccess } =
    useProductQuery(productId);
  const listData = [
    { label: 'Details', value: '' },
    { label: 'Mass', value: '1kg' },
    { label: 'Origin', value: 'Africa' },
    { label: 'Status', value: '156 items Left' },
  ];
  if (!productId) {
    return <Error message="Missing product ID" />;
  }

  if (isLoading || isFetching) {
    return <Loading />;
  }

  if (error) {
    console.log(error);

    return <Error message={error.message || 'Failed to get Product'} />;
  }

  return (
    <SafeAreaWrapper>
      <BackHeader title={data?.product?.name || 'loading...'} cartIcon={true}/>
      {isSuccess && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: verticalScale(60),
          }}
        >
          <View style={s.imageView}>
            <Image style={s.image} source={{ uri: data?.product?.image }} />
          </View>
          <View style={s.details}>
            <View style={s.row}>
              <View style={s.btn}>
                <Poppins color="white">Plants</Poppins>
              </View>
              <View style={s.btn}>
                <Poppins color="white">{data?.product?.category}</Poppins>
              </View>
            </View>
            <View style={s.price}>
              <Poppins size={24} color={Colors.primary800} weight="semibold">
                $ {data?.product?.price}
              </Poppins>
            </View>
            <FlatList
              scrollEnabled={false}
              data={listData}
              renderItem={({ item }) => {
                return (
                  <View style={s.detailItem}>
                    <Poppins>{item?.label}</Poppins>
                    <Poppins>{item?.value}</Poppins>
                  </View>
                );
              }}
            />

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <View>
                <Poppins color="#000" opacity={0.6}>
                  You picked {state.count} item
                </Poppins>
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
              </View>
              <View>
                <Poppins color="#000" opacity={0.6}>
                  Subtotal
                </Poppins>
                <Poppins size={24} weight="semibold">
                  $ {data?.product?.price * state.count}
                </Poppins>
              </View>
            </View>
            <View
              style={{ alignSelf: 'center', marginVertical: verticalScale(30) }}
            >
              <ButtonCmp disabled={state.count === 0} variant={'filled'}>
                Add to Cart
              </ButtonCmp>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaWrapper>
  );
};

export default ProductDetails;

const s = StyleSheet.create({
  imageView: {
    height: verticalScale(270),
    marginTop: verticalScale(20),
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: Colors.primary800,
    height: verticalScale(28),
    minWidth: scale(60),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  details: {
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    gap: scale(10),
    marginTop: verticalScale(5),
  },
  price: {
    marginVertical: verticalScale(20),
  },
  detailItem: {
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 2,
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    borderWidth: 1.5,
    borderRadius: moderateScale(4),
    borderColor: '#000',
    height: scale(22.5),
    width: scale(22.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
