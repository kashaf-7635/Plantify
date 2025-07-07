import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import { scale, verticalScale } from '../../../utils/scaling';
import { Formik } from 'formik';
import AntDesign from '@react-native-vector-icons/ant-design';
import CheckoutInput from '../../../components/InputCmp/CheckoutInput';
import Colors from '../../../utils/colors';

const Checkout = () => {
    const handleCheckout = () => { };
    return (
        <>
            <SafeAreaWrapper>
                <BackHeader title={'CHECKOUT'} />

                <Formik
                    initialValues={{ name: '', email: '', address: '', contact: '' }}
                    onSubmit={handleCheckout}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={s.container}>
                            <View style={s.borderBottom}>
                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                    Personal Information
                                </Poppins>
                            </View>
                            <CheckoutInput
                                placeholder={'Full Name'}
                                onChangeText={handleChange('name')}
                                onBlur={handleBlur('name')}
                                value={values.name}
                            />
                            <CheckoutInput
                                placeholder={'Email Address'}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                            />
                            <CheckoutInput
                                placeholder={'Address'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <CheckoutInput
                                placeholder={'Phone Number'}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />

                            <View style={s.borderBottom}>
                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                    Delivery Method
                                </Poppins>
                            </View>
                            <View style={s.borderBottom}>
                                <View style={{ flex: 1 }}>
                                    <Poppins color={Colors.primary800}>
                                        Quick Shipping - $15
                                    </Poppins>
                                    <Poppins color="#ABABAB">
                                        Expected Shipping Date: May 5th
                                    </Poppins>
                                </View>
                                <View>
                                    <AntDesign name="check" color={Colors.primary800} size={25} />
                                </View>
                            </View>

                            <View style={s.borderBottom}>
                                <View style={{ flex: 1 }}>
                                    <Poppins color={Colors.textDark}>COD - $20</Poppins>
                                    <Poppins color="#ABABAB">
                                        Expected Shipping Date: May 13th
                                    </Poppins>
                                </View>
                                <View>
                                    <AntDesign name="check" color={Colors.primary800} size={25} />
                                </View>
                            </View>

                            <View style={s.borderBottom}>
                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                    Payment Method
                                </Poppins>
                            </View>
                            <View style={s.borderBottom}>
                                <Poppins color={Colors.primary800}> VISA/MASTERCARD</Poppins>
                            </View>
                        </View>
                    )}
                </Formik>
            </SafeAreaWrapper>
        </>
    );
};

export default Checkout;

const s = StyleSheet.create({
    container: {
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(20),
    },
    borderBottom: {
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 2,
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
});
