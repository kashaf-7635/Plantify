import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import { scale, verticalScale } from '../../../utils/scaling';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../store/statuses';
import Loading from '../../../components/Loading';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import CartCard from '../../../components/ProductCard/Cart';

const Cart = () => {
  const {
    data: products,
    status,
    error,
  } = useSelector(state => state.products);

  if (error) {
    console.log(error);
    return <Error message={error} />;
  }

  if (status === STATUSES.LOADING) {
    return <Loading />;
  }
  return (
    <SafeAreaWrapper>
      <BackHeader title={'CART'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: verticalScale(10),
          paddingHorizontal: scale(30),
        }}
        data={products}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => {
          return <CartCard product={item} />;
        }}
        ListEmptyComponent={
          <View style={s.empty}>
            <Poppins>Your cart is currently empty.</Poppins>
          </View>
        }
      />
    </SafeAreaWrapper>
  );
};

export default Cart;

const s = StyleSheet.create({
  empty: {
    alignItems: 'center',
  },
});
