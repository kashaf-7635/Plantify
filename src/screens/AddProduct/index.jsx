import { Alert, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAddProductMutation } from '../../services/api';
import ButtonCmp from '../../components/ButtonCmp';

const AddProduct = ({ navigation }) => {
  const [addProduct, { isLoading, error, isSuccess, data }] =
    useAddProductMutation();

  const product = {
    name: 'Aloe Vera',
    price: 18.5,
    size: 8,
    category: 'Succulent',
    bio: 'Aloe Vera is a low-maintenance succulent known for its healing gel. Great for sunny windowsills and occasional watering.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMOwW5estno4DHmNMmp1gJmlEiyFIrT9CRCw&s',
  };

  useEffect(() => {
    console.log(isSuccess, error, data);

    if (isSuccess) {
      Alert.alert(data?.message);
      navigation.navigate('Home');
    }
    if (error) {
      Alert.alert(error?.data?.message || 'Something went wrong!');
    }
  }, [isSuccess, error]);

  const handleAdd = async () => {
    await addProduct(product);
  };
  return (
    <View style={s.container}>
      {/* <InputCmp label={'Name'} /> */}
      <ButtonCmp isLoading={isLoading} onPress={handleAdd}>
        Add
      </ButtonCmp>
    </View>
  );
};

export default AddProduct;

const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
