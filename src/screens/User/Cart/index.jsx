import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useRef, useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import { scale, verticalScale } from '../../../utils/scaling';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../store/statuses';
import Loading from '../../../components/Loading';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import CartCard from '../../../components/ProductCard/Cart';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import Entypo from '@react-native-vector-icons/entypo'
import Error from '../../../components/Error';


const Cart = ({ navigation }) => {
  const {
    data: products,
    status,
    error,
  } = useSelector(state => state.products);
  const [selectedItems, setSelectedItems] = useState({});
  const [itemCounts, setItemCounts] = useState({});


  const handleToggle = (productId) => {
    setSelectedItems(prev => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleCountChange = (productId, newCount) => {
    setItemCounts(prev => ({
      ...prev,
      [productId]: newCount,
    }));
  };

  const subtotal = products.reduce((sum, item) => {
    if (selectedItems[item._id]) {
      const count = itemCounts[item._id] || 1;
      return sum + item.price * count;
    }
    return sum;
  }, 0);


  if (error) {
    console.log(error);
    return <Error message={error} />;
  }

  if (status === STATUSES.LOADING) {
    return <Loading />;
  }
  return (
    <SafeAreaWrapper>
      <BackHeader title={'CART'} cartIcon={true} onDeleteAll={() => refDeleteAll.current.open()} />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: verticalScale(10),
          paddingHorizontal: scale(30),
        }}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => {
          return <CartCard
            product={item}
            isSelected={!!selectedItems[item._id]}
            count={itemCounts[item._id] || 1}
            onToggle={() => handleToggle(item._id)}
            onCountChange={(newCount) => handleCountChange(item._id, newCount)}
          />;
        }}
        ListEmptyComponent={
          <View style={s.empty}>
            <Poppins>Your cart is currently empty.</Poppins>
          </View>
        }
      />
      {Object.values(selectedItems).some(val => val) &&
        <View style={s.bottomContainer}>
          <View style={s.bottomInner}>
            <Poppins opacity={0.6}>Subtotal</Poppins>
            <Poppins size={16} color='#000'>$ {subtotal.toFixed(2)}</Poppins>
          </View>

          <ButtonCmp variant={'filled'} onPress={() => navigation.navigate('Checkout', { subtotal: subtotal.toFixed(2) })}>
            <View style={s.btnInner}>
              <Poppins color='white' size={16}>Proceed to Checkout</Poppins>
              <Entypo name='chevron-small-right' size={30} color={'white'} />
            </View>

          </ButtonCmp>
        </View>
      }


    </SafeAreaWrapper>
  );
};

export default Cart;

const s = StyleSheet.create({
  empty: {
    alignItems: 'center',
  },
  bottomContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(30),
    width: '100%',
    paddingHorizontal: scale(50)
  },
  bottomInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  btnInner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(30)
  }
});
