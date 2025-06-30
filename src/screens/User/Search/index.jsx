import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import OutlinedInput from '../../../components/InputCmp/OutlinedInput';
import { horizontalScale, verticalScale } from '../../../utils/scaling';
import Feather from '@react-native-vector-icons/feather';
import Entypo from '@react-native-vector-icons/entypo';
import Colors from '../../../utils/colors';
import Poppins from '../../../components/Styled/TextCmp/Poppins';

const SearchScreen = () => {
  const data = ['Spider Plant', 'Song of India'];
  const searchData = [''];
  return (
    <SafeAreaWrapper>
      <BackHeader title={'SEARCH'} />
      <View style={s.main}>
        <OutlinedInput
          placeholder={'Search'}
          iconCmp={
            <Feather name={'search'} size={25} color={Colors.textDark} />
          }
        />

        <View style={s.recentsearches}>
          <Poppins size={16} weight="semibold">
            Recent Searches
          </Poppins>

          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ marginTop: verticalScale(10) }}
            data={data}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item, index }) => {
              return (
                <View style={s.item}>
                  <View style={s.itemList}>
                    <Feather name="clock" size={20} color={'#ABABAB'} />
                    <Poppins size={16}>{item} </Poppins>
                  </View>

                  <Entypo name="cross" size={25} color={'#000'} />
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default SearchScreen;

const s = StyleSheet.create({
  main: {
    paddingHorizontal: horizontalScale(20),
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
    gap: horizontalScale(5),
  },
});
