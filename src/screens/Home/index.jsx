import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useAddProductMutation, useProductsQuery } from '../../services/api';
import ProductCard from '../../components/ProductCard';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Colors from '../../utils/colors';
import Loading from '../../components/Loading';
import Poppins from '../../components/Styled/TextCmp/Poppins';
import Error from '../../components/Error';

const Home = ({ navigation }) => {
  const { data, error, isLoading, isFetching, isSuccess } = useProductsQuery();
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

  if (isFetching || isLoading) {
    return <Loading />;
  }
  if (isSuccess && data?.products.length === 0) {
    return <Error message={'No Data Found'} />;
  }

  return (
    <View style={s.container}>
      {isSuccess && (
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
