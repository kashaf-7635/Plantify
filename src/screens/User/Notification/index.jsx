import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import NotificationCard from '../../../components/ProductCard/Notification';
import { useSelector } from 'react-redux';
import Error from '../../../components/Error';
import { STATUSES } from '../../../store/statuses';
import Loading from '../../../components/Loading';
import { scale, verticalScale } from '../../../utils/scaling';
import Poppins from '../../../components/Styled/TextCmp/Poppins';

const NotificationScreen = ({}) => {
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
      <BackHeader title={'NOTIFICATION'} />

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop: verticalScale(10),
          paddingHorizontal: scale(30),
        }}
        data={products}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index }) => {
          return <NotificationCard product={item} />;
        }}
        ListEmptyComponent={
          <View style={s.empty}>
            <Poppins>You don’t have any notification</Poppins>
          </View>
        }
      />
    </SafeAreaWrapper>
  );
};

export default NotificationScreen;

const s = StyleSheet.create({
  empty: {
    // flex: 1,
    alignItems: 'center',
  },
});
