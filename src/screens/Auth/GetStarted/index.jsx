import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import Philosopher from '../../../components/Styled/TextCmp/Philosopher';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import {
  scale,
  moderateScale,
  verticalScale,
} from '../../../utils/scaling';

const GetStarted = ({ navigation }) => {
  const handleLoginClick = () => {
    navigation.navigate('Signup');
  };
  return (
    <>
      <SafeAreaWrapper>
        <ImageBackground
          source={require('../../../assets/images/bg_getStarted.png')}
          style={{ flex: 3 }}
          resizeMode='contain'
        ></ImageBackground>
        <View style={s.content}>
          <Philosopher size={42} align="right">
            Planta
          </Philosopher>
          <Poppins color="#000" align="center" weight="bold">
            Your Premier Destination for Lush Greenery: Elevate your space with
            our exceptional plant selection
          </Poppins>

          <ButtonCmp onPress={handleLoginClick} variant="filled">
            Login / Signup
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
    paddingBottom: verticalScale(60),
    zIndex: 1,
  },
});
