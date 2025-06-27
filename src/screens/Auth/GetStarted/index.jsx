import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { authenticate } from '../../../store/authSlice';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import { moderateScale, verticalScale } from '../../../utils/scaling';

const GetStarted = () => {
  const dispatch = useDispatch();
  const login = role => {
    dispatch(authenticate({ role }));
  };
  return (
    <>
      <SafeAreaWrapper>
        <ImageBackground
          source={require('../../../assets/images/bg_getStarted.png')}
          style={{ flex: 3 }}
        ></ImageBackground>
        <View style={s.content}>
          <Philosopher size={42} align="right">
            Planta
          </Philosopher>
          <Poppins color="#000" align="center" weight="bold">
            Your Premier Destination for Lush Greenery: Elevate your space with
            our exceptional plant selection
          </Poppins>

          <ButtonCmp onPress={() => login('user')} variant="filled">
            User Login
          </ButtonCmp>
          <ButtonCmp onPress={() => login('admin')} variant="filled">
            Admin Login
          </ButtonCmp>
        </View>
      </SafeAreaWrapper>
    </>
  );
};

export default GetStarted;

const s = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'rgba(246, 246, 246, 0.2)',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingBottom: verticalScale(40),
    zIndex: 1,
  },
});
