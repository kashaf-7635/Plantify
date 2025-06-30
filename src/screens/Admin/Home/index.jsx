import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useProductsQuery } from '../../../services/productsApi';
import ProductCard from '../../../components/ProductCard';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Colors from '../../../utils/colors';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import { useSelector } from 'react-redux';

import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import { horizontalScale, verticalScale } from '../../../utils/scaling';
import AdminHeader from '../../../components/Header/AdminHeader';
import { STATUSES } from '../../../store/statuses';

const Home = ({ navigation }) => {
  const {} = useProductsQuery();
  const {
    data: products,
    status,
    error,
  } = useSelector(state => state.products);

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
    return <Error message={error} />;
  }

  if (status === STATUSES.LOADING) {
    return <Loading />;
  }
  if (status === STATUSES.SUCCESS && products.length === 0) {
    return <Error message={'No Data Found'} />;
  }

  return (
    <SafeAreaWrapper>
      <AdminHeader />
      {status === STATUSES.SUCCESS && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return <ProductCard product={item} />;
          }}
        />
      )}
    </SafeAreaWrapper>
  );
};

export default Home;
