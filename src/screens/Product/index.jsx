import { StyleSheet, View, Alert } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import {
  useDeleteProductMutation,
  useProductQuery,
  useUpdateProductMutation,
} from '../../services/api';
import ImageCmp from '../../components/Styled/ImageCmp';
import Poppins from '../../components/Styled/TextCmp/Poppins';
import Philosopher from '../../components/Styled/TextCmp/Philosopher';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/scaling';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ButtonCmp from '../../components/ButtonCmp';

const Product = ({ route, navigation }) => {
  const productId = route?.params?.productId;
  const { data, error, isLoading, isFetching, isSuccess } =
    useProductQuery(productId);
  const [
    updateProduct,
    {
      isLoading: updateProductLoading,
      isSuccess: updateProductSuccess,
      data: updateProductData,
      error: updateProductError,
    },
  ] = useUpdateProductMutation();
  const [
    deleteProduct,
    {
      isLoading: deleteProductLoading,
      isSuccess: deleteProductSuccess,
      data: deleteProductData,
      error: deleteProductError,
    },
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

  const product = {
    _id: data?.product?._id,
    name: 'Aloe Vera',
    price: 19,
    size: 8,
    category: 'Succulent',
    bio: 'Aloe Vera is a low-maintenance succulent known for its healing gel. Great for sunny windowsills and occasional watering.',
    image:
      'data:image/jpeg;base64,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',
  };

  useEffect(() => {
    console.log(updateProductSuccess, updateProductError, updateProductData);
    if (updateProductSuccess) {
      Alert.alert(updateProductData?.message);
    }
    if (updateProductError) {
      Alert.alert(updateProductError?.data?.message || 'Something went wrong!');
    }
  }, [updateProductSuccess, updateProductError]);

  const handleUpdate = async () => {
    await updateProduct(product);
  };

  useEffect(() => {
    console.log(deleteProductSuccess, deleteProductError, deleteProductData);

    if (deleteProductSuccess) {
      Alert.alert(deleteProductData?.message);
      navigation.navigate('Home');
    }
    if (deleteProductError) {
      Alert.alert(deleteProductData?.data?.message || 'Something went wrong!');
    }
  }, [deleteProductSuccess, deleteProductError]);

  const handleDelete = async () => {
    await deleteProduct(data?.product?._id);
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
        <View style={s.container}>
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

            <ButtonCmp onPress={handleUpdate} isLoading={updateProductLoading}>
              Edit
            </ButtonCmp>
            <ButtonCmp onPress={handleDelete} isLoading={deleteProductLoading}>
              Delete
            </ButtonCmp>
          </View>
        </View>
      )}
    </>
  );
};

export default Product;

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  details: {
    padding: moderateScale(20),
    gap: verticalScale(10),
  },
  row: {
    flexDirection: 'row',
    gap: horizontalScale(30),
    marginTop: verticalScale(20),
  },
});
