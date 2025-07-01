import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import OutlinedInput from '../../../components/InputCmp/OutlinedInput';
import { scale, moderateScale, verticalScale } from '../../../utils/scaling';
import Feather from '@react-native-vector-icons/feather';
import Entypo from '@react-native-vector-icons/entypo';
import Colors from '../../../utils/colors';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import { useSelector } from 'react-redux';
import Error from '../../../components/Error';
import Loading from '../../../components/Loading';
import { STATUSES } from '../../../store/statuses';
import SearchCard from '../../../components/ProductCard/SearchCard';

const SearchScreen = () => {
  const data = ['Spider Plant', 'Song of India'];
  const [searchQuery, setSearchQuery] = useState('');

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
      <BackHeader title={'SEARCH'} />
      <View style={s.main}>
        <OutlinedInput
          placeholder={'Search'}
          onChangeText={text => setSearchQuery(text)}
          iconCmp={
            <Feather
              name={'search'}
              size={moderateScale(25)}
              color={Colors.textDark}
            />
          }
        />

        <View style={s.recentsearches}>
          {searchQuery ? (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: verticalScale(10) }}
              data={products}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => {
                return <SearchCard product={item} />;
              }}
            />
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ marginTop: verticalScale(10) }}
              data={data}
              ListHeaderComponent={
                <Poppins size={16} weight="semibold">
                  Recent Searches
                </Poppins>
              }
              keyExtractor={(item, index) => item + index}
              renderItem={({ item, index }) => {
                return (
                  <View style={s.item}>
                    <View style={s.itemList}>
                      <Feather
                        name="clock"
                        size={moderateScale(20)}
                        color={'#ABABAB'}
                      />
                      <Poppins size={16}>{item} </Poppins>
                    </View>

                    <Entypo
                      name="cross"
                      size={moderateScale(25)}
                      color={'#000'}
                    />
                  </View>
                );
              }}
            />
          )}
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SearchScreen;

const s = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
  },
  recentsearches: {
    marginTop: verticalScale(20),
  },
  item: {
    flexDirection: 'row',
    marginTop: verticalScale(10),
  },
  itemList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(5),
  },
});
