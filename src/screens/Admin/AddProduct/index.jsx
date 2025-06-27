import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import {
  useAddProductMutation,
  useUpdateProductMutation,
} from '../../../services/api';
import Toast from 'react-native-toast-message';
import InputCmp from '../../../components/InputCmp';
import DropdownCmp from '../../../components/DropdownCmp';
import { Formik } from 'formik';
import { launchImageLibrary } from 'react-native-image-picker';
import ImageCmp from '../../../components/Styled/ImageCmp';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import AdminHeader from '../../../components/Header/AdminHeader';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import { horizontalScale, verticalScale } from '../../../utils/scaling';

const AddProduct = ({ navigation, route }) => {
  const [addProduct, { isLoading, isFetching }] = useAddProductMutation();
  const [
    updateProduct,
    { isLoading: updateLoading, isFetching: updateFetching },
  ] = useUpdateProductMutation();
  const editData = route?.params?.product;
  const [image, setImage] = useState('');
  const [uploading, setUploading] = useState(false);

  const sizes = [
    { label: 'Large', value: 'Large' },
    { label: 'Medium', value: 'Medium' },
    { label: 'Small', value: 'Small' },
  ];

  const categories = [
    { label: 'Succulent', value: 'Succulent' },
    { label: 'Fern', value: 'Fern' },
    { label: 'Cactus', value: 'Cactus' },
    { label: 'Herb', value: 'herb' },
    { label: 'Flowering', value: 'Flowering' },
    { label: 'Ornamental', value: 'Ornamental' },
    { label: 'Indoor', value: 'Indoor' },
    { label: 'Outdoor', value: 'Outdoor' },
    { label: 'Climber', value: 'Climber' },
    { label: 'Aquatic', value: 'Aquatic' },
  ];

  const handleAdd = async (values, { resetForm }) => {
    const payload = {
      ...values,
      price: parseFloat(values.price),
    };
    console.log(payload);

    try {
      const result = await addProduct(payload).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: result?.message || 'Product added!',
      });
      resetForm();
      navigation.navigate('Home');
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err?.data?.message || 'Something went wrong!',
      });
    }
  };

  const handleUpdate = async (values, { resetForm }) => {
    const payload = {
      ...values,
      _id: editData._id,
    };

    try {
      const result = await updateProduct(payload).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: result?.message || 'Product added!',
      });
      resetForm();
      navigation.navigate('Product', { productId: editData._id });
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err?.data?.message || 'Something went wrong!',
      });
    }
  };

  const CLOUDINARY_URL =
    'https://api.cloudinary.com/v1_1/dmvs1559g/image/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'ml_default';

  const pickImage = async setFieldValue => {
    try {
      setUploading(true);
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });

      if (result.didCancel) {
        console.log('User cancelled image picker');
      } else if (result.errorCode) {
        Toast.show({
          type: 'error',
          text1: 'Image Picker Error',
          text2: result.errorMessage || 'Something went wrong!',
        });
      } else {
        const asset = result.assets[0];

        const formData = new FormData();
        formData.append('file', {
          uri: asset.uri,
          type: asset.type,
          name: asset.fileName || 'upload.jpg',
        });
        formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

        const res = await fetch(CLOUDINARY_URL, {
          method: 'POST',
          body: formData,
        });

        const data = await res.json();

        if (data.secure_url) {
          setImage(data.secure_url);
          setFieldValue('image', data.secure_url);
          Toast.show({
            type: 'success',
            text1: 'Uploaded!',
            text2: 'Image uploaded successfully.',
          });
        } else {
          throw new Error(data.error?.message || 'Upload failed');
        }
      }
    } catch (err) {
      console.error('Upload error:', err);
      Toast.show({
        type: 'error',
        text1: 'Upload Error',
        text2: err.message || 'Something went wrong!',
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <>
      <SafeAreaWrapper>
        <AdminHeader />
        <Formik
          initialValues={{
            name: editData?.name || '',
            price: editData?.price?.toString() || '',
            size: editData?.size || '',
            category: editData?.category || '',
            bio: editData?.bio || '',
            image: editData?.image || '',
          }}
          onSubmit={editData ? handleUpdate : handleAdd}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            setFieldValue,
          }) => (
            <ScrollView contentContainerStyle={s.scrollContent}>
              <View style={s.container}>
                <InputCmp
                  label="Name"
                  value={values.name}
                  onChangeText={handleChange('name')}
                  placeholder="Enter plant name..."
                />

                <TouchableOpacity
                  onPress={() => pickImage(setFieldValue)}
                  style={{ width: '100%' }}
                >
                  {uploading ? (
                    <ActivityIndicator />
                  ) : (
                    <InputCmp
                      label="Pick Image"
                      value={values.image}
                      onChangeText={handleChange('image')}
                      placeholder="Click here"
                      editable={false}
                    />
                  )}
                </TouchableOpacity>

                {values.image && <ImageCmp source={values.image} width={100} />}

                <InputCmp
                  label="Price"
                  value={values.price}
                  onChangeText={handleChange('price')}
                  placeholder="Enter plant price..."
                  keyboardType="numeric"
                />
                <InputCmp
                  label="Bio"
                  value={values.bio}
                  onChangeText={handleChange('bio')}
                  placeholder="Enter plant bio..."
                  multiline={true}
                />

                <DropdownCmp
                  label="Size"
                  value={values.size}
                  setValue={val => setFieldValue('size', val)}
                  items={sizes}
                />
                <DropdownCmp
                  label="Category"
                  value={values.category}
                  setValue={val => setFieldValue('category', val)}
                  items={categories}
                />

                <ButtonCmp
                  variant={'filled'}
                  isLoading={
                    isLoading || isFetching || updateLoading || updateFetching
                  }
                  onPress={handleSubmit}
                >
                  {editData ? 'Update' : 'Add'}
                </ButtonCmp>
              </View>
            </ScrollView>
          )}
        </Formik>
      </SafeAreaWrapper>
    </>
  );
};

export default AddProduct;

const s = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: horizontalScale(20),
    paddingBottom: verticalScale(30),
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
