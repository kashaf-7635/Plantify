import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useAddProductMutation, useProductsQuery } from '../../services/api';
import ProductCard from '../../components/ProductCard';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Colors from '../../utils/colors';
import Loading from '../../components/Loading';
import Poppins from '../../components/Styled/TextCmp/Poppins';
import Error from '../../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, STATUSES } from '../../store/productSlice';

const Home = ({ navigation }) => {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
  const dispatch = useDispatch();
  // const { data, status, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
            <FontAwesome name="plus" color={Colors.textPrimary} size={30} />
          </TouchableOpacity>
        );
      },
    });
  }, []);

  if (error) {
    console.log(error);

    return <Error message={error?.message} />;
  }

  if (
    isFetching ||
    isLoading
    // status === STATUSES.LOADING
  ) {
    return <Loading />;
  }
  if (
    isSuccess &&
    // status === STATUSES.SUCCESS
    data?.products.length === 0
  ) {
    return <Error message={'No Data Found'} />;
  }

  return (
    <View style={s.container}>
      {isSuccess && (
        // status === STATUSES.SUCCESS
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data?.products}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Home;

const s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
});
