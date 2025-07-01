import { StyleSheet, View, Alert } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import {
  useDeleteProductMutation,
  useProductQuery,
  useUpdateProductMutation,
} from '../../../services/productsApi';
import ImageCmp from '../../../components/Styled/ImageCmp';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import {
  scale,
  moderateScale,
  verticalScale,
} from '../../../utils/scaling';
import Loading from '../../../components/Loading';
import Error from '../../../components/Error';
import Toast from 'react-native-toast-message';
import ButtomCmp from '../../../components/Buttons/ButtonCmp';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import AdminHeader from '../../../components/Header/AdminHeader';
import Colors from '../../../utils/colors';

const Product = ({ route, navigation }) => {
  const productId = route?.params?.productId;
  const { data, error, isLoading, isFetching, isSuccess } =
    useProductQuery(productId);

  const [
    deleteProduct,
    { isLoading: deleteLoading, isFetching: deleteFetching },
  ] = useDeleteProductMutation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Philosopher size={18} weight="bold">
          {data?.product.name ? data?.product?.name : 'Loading....'}
        </Philosopher>
      ),
    });
  }, [data?.product]);

  const handleEdit = async () => {
    navigation.navigate('AddProduct', { product: data?.product });
  };

  const handleDelete = async () => {
    try {
      const res = await deleteProduct(data?.product?._id).unwrap();
      Toast.show({
        type: 'error',
        text1: 'Success',
        text2: res?.message,
      });
      navigation.navigate('Home');
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err?.data?.message || 'Something went wrong!',
      });
    }
  };

  if (error) {
    return <Error message={error?.data?.message} />;
  }

  if (isFetching || isLoading) {
    return <Loading />;
  }

  return (
    <>
      {isSuccess && (
        <SafeAreaWrapper>
          <AdminHeader title={data?.product.name} />
          <ImageCmp source={data?.product?.image} height={231} width={375} />
          <View style={s.details}>
            <Poppins size={16} weight="bold">
              Description
            </Poppins>
            <Philosopher size={12} weight="bold">
              {data?.product?.bio}
            </Philosopher>

            <View style={s.row}>
              <View>
                <Poppins color="#000" opacity={0.5} size={10}>
                  Size
                </Poppins>
                <Poppins color="#000" weight="bold">
                  {data?.product?.size}
                </Poppins>
              </View>

              <View>
                <Poppins color="#000" opacity={0.5} size={10}>
                  Price
                </Poppins>
                <Poppins color="#000" weight="bold">
                  {data?.product?.price}$
                </Poppins>
              </View>

              <View>
                <Poppins color="#000" opacity={0.5} size={10}>
                  Category
                </Poppins>
                <Poppins color="#000" weight="bold">
                  {data?.product?.category}
                </Poppins>
              </View>
            </View>
            <View style={{ alignItems: 'center' }}>
              <ButtomCmp variant={'filled'} onPress={handleEdit}>
                Edit
              </ButtomCmp>
              <ButtomCmp
                variant={'filled'}
                onPress={handleDelete}
                isLoading={deleteLoading || deleteFetching}
              >
                Delete
              </ButtomCmp>
            </View>
          </View>
        </SafeAreaWrapper>
      )}
    </>
  );
};

export default Product;

const s = StyleSheet.create({
  details: {
    backgroundColor: Colors.bg,
    padding: moderateScale(20),
    gap: verticalScale(10),
  },
  row: {
    flexDirection: 'row',
    gap: scale(30),
    marginTop: verticalScale(20),
  },
});
