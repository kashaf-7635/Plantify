import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useProductQuery } from '../../../services/productsApi';
import Loading from '../../../components/Loading';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import { moderateScale, scale, verticalScale } from '../../../utils/scaling';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import AntDesign from '@react-native-vector-icons/ant-design';

const ProductDetails = ({ route }) => {
  const productId = route?.params?.productId;
  const { data, isLoading, isFetching, error } = useProductQuery(productId);

  if (isLoading || isFetching) {
    <Loading />;
  }

  if (error) {
    <Error message={error.message || 'Failed to get Product'} />;
  }

  return (
    <SafeAreaWrapper>
      <BackHeader title={data?.product?.name} />
      <View style={s.imageView}>
        <Image style={s.image} source={{ uri: data?.product?.image }} />
      </View>
      <View style={s.details}>
        <View style={s.row}>
          <View style={s.btn}>
            <Poppins color="white">Plants</Poppins>
          </View>
          <View style={s.btn}>
            <Poppins color="white">{data?.product?.category}</Poppins>
          </View>
        </View>
        <View style={s.price}>
          <Poppins size={24} color={Colors.primary800} weight="semibold">
            $ {data?.product?.price}
          </Poppins>
        </View>

        <View style={s.detailItem}>
          <Poppins size={16}>Details</Poppins>
        </View>

        <View style={s.detailItem}>
          <Poppins>Mass</Poppins>
          <Poppins>1 kg</Poppins>
        </View>

        <View style={s.detailItem}>
          <Poppins>Origin</Poppins>
          <Poppins>Africa</Poppins>
        </View>

        <View style={s.detailItem}>
          <Poppins>Status</Poppins>
          <Poppins color={Colors.primary800}>156 items Left</Poppins>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Poppins color="#000" opacity={0.6}>
              You picked 0 item
            </Poppins>
            <View style={s.row}>
              <View style={s.box}>
                <AntDesign
                  name="plus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </View>
              <View>
                <Poppins color="#000" size={16}>
                  0
                </Poppins>
              </View>
              <View style={s.box}>
                <AntDesign
                  name="minus"
                  color={'#000'}
                  size={moderateScale(15)}
                />
              </View>
            </View>
          </View>
          <View>
            <Poppins color="#000" opacity={0.6}>
              Subtotal
            </Poppins>
            <Poppins size={24} weight="semibold">
              $ 250
            </Poppins>
          </View>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProductDetails;

const s = StyleSheet.create({
  imageView: {
    height: verticalScale(270),
    marginTop: verticalScale(20),
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  btn: {
    backgroundColor: Colors.primary800,
    height: verticalScale(28),
    minWidth: scale(60),
    paddingHorizontal: scale(5),
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  details: {
    paddingHorizontal: scale(30),
    paddingVertical: verticalScale(20),
  },
  row: {
    flexDirection: 'row',
    gap: scale(10),
    marginTop: verticalScale(10)
  },
  price: {
    marginVertical: verticalScale(20),
  },
  detailItem: {
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 2,
    marginVertical: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    borderWidth: 1.5,
    borderRadius: moderateScale(4),
    borderColor: '#000',
    height: scale(22.5),
    width: scale(22.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
