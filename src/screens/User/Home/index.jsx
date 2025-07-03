import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import { scale, moderateScale, verticalScale } from '../../../utils/scaling';
import Colors from '../../../utils/colors';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import AntDesign from '@react-native-vector-icons/ant-design';
import Feather from '@react-native-vector-icons/feather';
import SquareCard from '../../../components/ProductCard/SquareCard';
import { useProductsQuery } from '../../../services/productsApi';
import { useSelector } from 'react-redux';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';
import { STATUSES } from '../../../store/statuses';
import ProductList from '../../../components/ProductList';

const HomeScreen = () => {
  const {  } = useProductsQuery();
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={s.hero}>
          <View style={s.row}>
            <View style={s.left}>
              <Philosopher weight="bold" size={24} color={Colors.textDark}>
                Planta - shining your {'\n'}little space
              </Philosopher>
              <View
                style={[
                  s.row,
                  {
                    marginTop: verticalScale(15),
                    gap: scale(10),
                    alignItems: 'center',
                  },
                ]}
              >
                <Poppins size={16} weight="semibold" color={Colors.primary800}>
                  See New Arrivals
                </Poppins>
                <AntDesign
                  name="arrow-right"
                  color={Colors.primary800}
                  size={moderateScale(20)}
                />
              </View>
            </View>
            <View style={s.right}>
              <View style={s.circle}>
                <Feather
                  name="shopping-cart"
                  color={Colors.textDark}
                  size={moderateScale(25)}
                />
              </View>
            </View>
          </View>
          <View style={s.imageContainer}>
            <Image
              style={s.image}
              source={require('../../../assets/images/hero.png')}
            />
          </View>
        </View>

        <ProductList
          products={products}
          isSuccess={status === STATUSES.SUCCESS}
          title={'Plants'}
        />
        <ProductList
          products={products}
          isSuccess={status === STATUSES.SUCCESS}
          title={'Equipments'}
        />

        <View style={s.kitCard}>
          <View style={s.kitText}>
            <Poppins weight="semibold" size={16}>
              Lemon Balm Grow Kit
            </Poppins>
            <Poppins color="#7D7B7B" noOfLines={2}>
              Include: Lemon Balm seeds, dung, Planta pot, marker...
            </Poppins>
          </View>
          <View style={{ flex: 1 }}>
            <Image
              style={s.image}
              source={require('../../../assets/images/kit.png')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
};

export default HomeScreen;

const s = StyleSheet.create({
  hero: {
    backgroundColor: Colors.bg,
    height: verticalScale(318),
    width: '100%',
    padding: moderateScale(20),
    position: 'relative',
  },
  row: {
    flexDirection: 'row',
  },
  circle: {
    backgroundColor: 'white',
    height: scale(46),
    width: scale(48),
    borderRadius: moderateScale(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  left: {
    flex: 1,
    paddingTop: verticalScale(10),
  },
  right: {
    flex: 0.2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    height: verticalScale(205),
    width: '100%',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  kitCard: {
    flexDirection: 'row',
    height: verticalScale(134),
    backgroundColor: Colors.bg,
    borderRadius: moderateScale(8),
    marginHorizontal: scale(20),
    marginVertical: verticalScale(10),
    overflow: 'hidden',
  },
  kitText: {
    flex: 2,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});
