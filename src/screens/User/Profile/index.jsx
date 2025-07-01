import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import BackHeader from '../../../components/Header/BackHeader';
import { verticalScale } from '../../../utils/scaling';
import { persistor, store } from '../../../store';

export const handleLogout = async () => {
  store.dispatch({ type: 'RESET_STORE' });
  await persistor.purge();
};
const ProfileScreen = () => {
  return (
    <SafeAreaWrapper>
      <View style={s.main}>
        <BackHeader title={'Profile'} />
        <View style={s.btnView}>
          <ButtonCmp onPress={handleLogout} variant={'filled'}>
            Logout
          </ButtonCmp>
        </View>
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

const s = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
  },
  btnView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
