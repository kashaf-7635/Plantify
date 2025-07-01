import {
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
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
import { Formik } from 'formik';
import OutlinedInput from '../../../components/InputCmp/OutlinedInput';
import { useLoginUserMutation } from '../../../services/userApi';
import Toast from 'react-native-toast-message';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../../store/statuses';

const Login = ({ navigation }) => {
  const [loginUser] = useLoginUserMutation();
  const { status} = useSelector(state => state.auth);
  const handleLogin = async (values, { resetForm }) => {
    console.log(values);
    try {
      const result = await loginUser(values).unwrap();
      Toast.show({
        type: 'success',
        text1: 'Success',
        text2: result?.message || 'User added!',
      });
      resetForm();
    } catch (err) {
      console.log(err);

      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: err?.data?.message || 'Something went wrong!',
      });
    }
  };

  return (
    <SafeAreaWrapper>
      <View style={s.content}>
        <Philosopher size={42} align="right">
          Planta
        </Philosopher>
        <View style={{ marginVertical: verticalScale(20) }}>
          <Poppins color="#000" align="center" weight="bold">
            Your Premier Destination for Lush Greenery: Elevate your space with
            our exceptional plant selection
          </Poppins>
        </View>

        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
              <OutlinedInput
                placeholder={'Email'}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <OutlinedInput
                placeholder={'Password'}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry={true}
              />
              <View style={{ marginVertical: verticalScale(20) }}>
                <ButtonCmp
                  onPress={handleSubmit}
                  variant="filled"
                  isLoading={status === STATUSES.LOADING}
                >
                  Login
                </ButtonCmp>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Poppins>Don't have an Account? </Poppins>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Signup')}
                  >
                    <Poppins weight="bold">Signup</Poppins>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaWrapper>
  );
};

export default Login;

const s = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: 'rgba(246, 246, 246, 0.2)',
    alignItems: 'center',
    paddingHorizontal: moderateScale(20),
    paddingBottom: verticalScale(60),
    zIndex: 1,
  },
});
