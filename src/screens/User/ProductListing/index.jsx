import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import { moderateScale, scale, verticalScale } from '../../../utils/scaling';
import { useSelector } from 'react-redux';
import Error from '../../../components/Error';
import { STATUSES } from '../../../store/statuses';
import Loading from '../../../components/Loading';
import SquareCard from '../../../components/ProductCard/SquareCard';

const ProductListing = () => {
  const categories = ['All', 'New', 'Outdoor', 'Indoor'];
  const [active, setActive] = useState('All');
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
      <BackHeader title={'PLANTS'} cartIcon={true} />
      <View style={{ marginHorizontal: scale(20) }}>
        <View style={s.tabs}>
          {categories.map((cat, index) => (
            <TouchableOpacity
              onPress={() => setActive(cat)}
              style={[
                s.btn,
                cat === active && { backgroundColor: Colors.primary800 },
              ]}
              key={index + cat}
            >
              <Poppins color={cat === active ? 'white' : '#7D7B7B'}>
                {cat}
              </Poppins>
            </TouchableOpacity>
          ))}
        </View>

        <FlatList
          scrollEnabled={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return <SquareCard product={item} />;
          }}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default ProductListing;

const s = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    gap: scale(8),
    justifyContent: 'center',
    marginTop: verticalScale(30),
  },
  btn: {
    height: verticalScale(28),
    // minWidth: scale(60),
    paddingHorizontal: scale(10),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
});
