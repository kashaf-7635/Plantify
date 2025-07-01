import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Error from '../Error';
import Philosopher from '../Styled/TextCmp/Philosopher';
import SquareCard from '../ProductCard/SquareCard';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import Colors from '../../utils/colors';
import Poppins from '../Styled/TextCmp/Poppins';

const ProductList = ({ title, products, isSuccess }) => {
  return (
    <View style={s.listSection}>
      {isSuccess && products.length !== 0 ? (
        <FlatList
          scrollEnabled={false}
          ListHeaderComponent={
            <>
              <Philosopher weight="bold" size={24} color={Colors.textDark}>
                {title}
              </Philosopher>
            </>
          }
          ListFooterComponent={
            <>
              <TouchableOpacity style={s.seeMore}>
                <Poppins weight="semibold" size={16} color={Colors.textDark}>
                  See More
                </Poppins>
              </TouchableOpacity>
            </>
          }
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item._id}
          renderItem={({ item }) => {
            return <SquareCard product={item} />;
          }}
        />
      ) : (
        <Error message={'No Data Found'} />
      )}
    </View>
  );
};

export default ProductList;

const s = StyleSheet.create({
  listSection: {
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(30),
  },
  seeMore: {
    marginTop: verticalScale(10),
    alignSelf: 'flex-end',
    borderBottomColor: Colors.textDark,
    borderBottomWidth: 1,
  },
});
