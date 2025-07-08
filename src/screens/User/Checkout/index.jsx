import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import { scale, verticalScale } from '../../../utils/scaling';
import { Formik } from 'formik';
import AntDesign from '@react-native-vector-icons/ant-design';
import CheckoutInput from '../../../components/InputCmp/CheckoutInput';
import Colors from '../../../utils/colors';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import CheckoutSchema from '../../../schema/CheckoutSchema';

const Checkout = ({ route }) => {
    const formikRef = useRef();
    const [isEdit, setIsEdit] = useState(true);
    const subtotal = Number(route?.params?.subtotal) || 0;
    const [deliveryMethod, setDeliveryMethod] = useState(null);
    const handleCheckout = async values => {
        setIsEdit(false);

        if (formikRef.current) {
            formikRef.current.setTouched({
                pin: true,
                cardName: true,
                expiry: true,
                cvc: true,
            });
            await formikRef.current.validateForm();
        }

        console.log(values);
    };

    let totalAmount = (subtotal + (deliveryMethod?.amount || 0)).toFixed(2);

    const deliveryMethods = [
        {
            id: 'quick',
            amount: 15,
            price: 'Quick Shipping - $15',
            date: 'Expected Shipping Date: May 5th',
        },
        {
            id: 'cod',
            amount: 20,
            price: 'COD - $20',
            date: 'Expected Shipping Date: May 13th',
        },
    ];

    const paymentMethod = ['VISA/MASTER CARD', 'Debit Card'];
    useEffect(() => {
        if (!isEdit && formikRef.current) {
            formikRef.current.validateForm();
        }
    }, [isEdit]);



    return (
        <>
            <SafeAreaWrapper>
                <BackHeader title={'CHECKOUT'} />
                <Formik
                    validationSchema={CheckoutSchema}
                    validateOnMount
                    validateOnChange
                    validateOnBlur
                    initialValues={{
                        name: '',
                        email: '',
                        address: '',
                        contact: '',
                        deliveryMethod: '',
                        paymentMethod: '',
                        pin: '',
                        cardName: '',
                        expiry: '',
                        cvc: ''
                    }}
                    onSubmit={handleCheckout}
                    innerRef={formikRef}

                    validationContext={{ isEdit }}
                >
                    {({
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        values,
                        setFieldValue,
                        errors,
                        touched,
                        isSubmitting,
                        isValid
                    }) => (

                        <>

                            <ScrollView
                                style={{ flex: 1 }}
                                showsVerticalScrollIndicator={false}
                            >
                                {isEdit ?

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
                                        {errors.name && touched.name && (
                                            <Poppins color={Colors.error}>{errors.name}</Poppins>
                                        )}
                                        <CheckoutInput
                                            placeholder={'Email Address'}
                                            onChangeText={handleChange('email')}
                                            onBlur={handleBlur('email')}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && (
                                            <Poppins color={Colors.error}>{errors.email}</Poppins>
                                        )}
                                        <CheckoutInput
                                            placeholder={'Address'}
                                            onChangeText={handleChange('address')}
                                            onBlur={handleBlur('address')}
                                            value={values.address}
                                        />
                                        {errors.address && touched.address && (
                                            <Poppins color={Colors.error}>{errors.address}</Poppins>
                                        )}
                                        <CheckoutInput
                                            placeholder={'Phone Number'}
                                            onChangeText={handleChange('contact')}
                                            onBlur={handleBlur('contact')}
                                            value={values.contact}
                                        />
                                        {errors.contact && touched.contact && (
                                            <Poppins color={Colors.error}>{errors.contact}</Poppins>
                                        )}

                                        <View style={s.borderBottom}>
                                            <Poppins weight="semibold" color="#221F1F" size={16}>
                                                Delivery Method
                                            </Poppins>
                                        </View>

                                        {deliveryMethods.map(item => {
                                            return (
                                                <TouchableOpacity
                                                    onPress={() => {
                                                        setFieldValue('deliveryMethod', item.id);
                                                        setDeliveryMethod(item);
                                                    }}
                                                    key={item.id}
                                                    style={s.borderBottom}
                                                >
                                                    <View style={{ flex: 1 }}>
                                                        <Poppins
                                                            color={
                                                                values.deliveryMethod === item.id
                                                                    ? Colors.primary800
                                                                    : Colors.textDark
                                                            }
                                                        >
                                                            {item.price}
                                                        </Poppins>
                                                        <Poppins color="#ABABAB">{item.date}</Poppins>
                                                    </View>
                                                    {values.deliveryMethod === item.id && (
                                                        <View>
                                                            <AntDesign
                                                                name="check"
                                                                color={Colors.primary800}
                                                                size={25}
                                                            />
                                                        </View>
                                                    )}
                                                </TouchableOpacity>
                                            );
                                        })}



                                        {values.deliveryMethod !== 'cod' && <>
                                            <View style={s.borderBottom}>
                                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                                    Payment Method
                                                </Poppins>
                                            </View>


                                            {paymentMethod.map(item => {
                                                return (
                                                    <TouchableOpacity
                                                        onPress={() => setFieldValue('paymentMethod', item)}
                                                        key={item}
                                                        style={s.borderBottom}
                                                    >
                                                        <View style={{ flex: 1 }}>
                                                            <Poppins
                                                                color={
                                                                    values.paymentMethod === item
                                                                        ? Colors.primary800
                                                                        : Colors.textDark
                                                                }
                                                            >
                                                                {item}
                                                            </Poppins>
                                                        </View>
                                                        {values.paymentMethod === item && (
                                                            <View>
                                                                <AntDesign
                                                                    name="check"
                                                                    color={Colors.primary800}
                                                                    size={25}
                                                                />
                                                            </View>
                                                        )}
                                                    </TouchableOpacity>
                                                );
                                            })}
                                        </>}

                                    </View> :

                                    <View style={s.container}>
                                        {values.deliveryMethod !== 'cod' &&
                                            <View style={{ marginBottom: verticalScale(20) }}>
                                                <View style={s.borderBottom}>
                                                    <Poppins weight="semibold" color="#221F1F" size={16}>
                                                        Banking Information
                                                    </Poppins>
                                                </View>
                                                <CheckoutInput
                                                    placeholder={'PIN'}
                                                    onChangeText={handleChange('pin')}
                                                    onBlur={handleBlur('pin')}
                                                    value={values.pin}
                                                />
                                                {errors.pin && touched.pin && (
                                                    <Poppins color={Colors.error}>{errors.pin}</Poppins>
                                                )}

                                                <CheckoutInput
                                                    placeholder={'Card Name'}
                                                    onChangeText={handleChange('cardName')}
                                                    onBlur={handleBlur('cardName')}
                                                    value={values.cardName}
                                                />
                                                {errors.cardName && touched.cardName && (
                                                    <Poppins color={Colors.error}>{errors.cardName}</Poppins>
                                                )}

                                                <CheckoutInput
                                                    placeholder={'Expired Date (MM/YY)'}
                                                    onChangeText={handleChange('expiry')}
                                                    onBlur={handleBlur('expiry')}
                                                    value={values.expiry}
                                                />
                                                {errors.expiry && touched.expiry && (
                                                    <Poppins color={Colors.error}>{errors.expiry}</Poppins>
                                                )}

                                                <CheckoutInput
                                                    placeholder={'CVC'}
                                                    onChangeText={handleChange('cvc')}
                                                    onBlur={handleBlur('cvc')}
                                                    value={values.cvc}
                                                />
                                                {errors.cvc && touched.cvc && (
                                                    <Poppins color={Colors.error}>{errors.cvc}</Poppins>
                                                )}
                                            </View>
                                        }


                                        <View style={{ marginBottom: verticalScale(20) }}>
                                            <View style={[s.borderBottom, s.row]}>
                                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                                    Personal Information
                                                </Poppins>
                                                <TouchableOpacity onPress={() => setIsEdit(true)}>
                                                    <Poppins weight="semibold" color="#7D7B7B">
                                                        edit
                                                    </Poppins>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={s.inputText}>
                                                <Poppins color='#7D7B7B'>{values.name}</Poppins>
                                            </View>
                                            <View style={s.inputText}>
                                                <Poppins color='#7D7B7B'>{values.email}</Poppins>
                                            </View>
                                            <View style={s.inputText}>
                                                <Poppins color='#7D7B7B'>{values.address}</Poppins>
                                            </View>
                                            <View style={s.inputText}>
                                                <Poppins color='#7D7B7B'>{values.contact}</Poppins>
                                            </View>
                                        </View>

                                        <View style={{ marginBottom: verticalScale(20) }}>
                                            <View style={[s.borderBottom, s.row]}>
                                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                                    Delivery Method
                                                </Poppins>
                                                <TouchableOpacity onPress={() => setIsEdit(true)}>
                                                    <Poppins weight="semibold" color="#7D7B7B">
                                                        edit
                                                    </Poppins>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={s.inputText}>
                                                <Poppins color='#7D7B7B'>{deliveryMethod.price}</Poppins>
                                                <Poppins color='#7D7B7B'>{deliveryMethod.date}</Poppins>
                                            </View>

                                        </View>


                                    </View>
                                }





                            </ScrollView>
                            <View style={s.bottomContainer}>
                                <View style={s.item}>
                                    <Poppins color="#000" opacity={0.6}>
                                        Subtotal
                                    </Poppins>
                                    <Poppins color="#000">$ {subtotal}</Poppins>
                                </View>
                                <View style={s.item}>
                                    <Poppins color="#000" opacity={0.6}>
                                        Delivery Fee
                                    </Poppins>
                                    <Poppins color="#000">$ {deliveryMethod?.amount}</Poppins>
                                </View>
                                <View style={s.item}>
                                    <Poppins color="#000" opacity={0.6}>
                                        Total
                                    </Poppins>
                                    <Poppins color={Colors.primary800}>$ {totalAmount}</Poppins>
                                </View>
                                <View
                                    style={{
                                        alignSelf: 'center',
                                        paddingVertical: verticalScale(10),
                                    }}
                                >
                                    <ButtonCmp
                                        disabled={
                                            !isValid ||
                                            (!isEdit && values.deliveryMethod === 'quick' &&
                                                (!values.pin || !values.cardName || !values.expiry || !values.cvc))
                                        }
                                        onPress={handleSubmit}
                                        variant={'filled'}
                                    >
                                        Continue
                                    </ButtonCmp>
                                </View>
                            </View>
                        </>
                    )}
                </Formik>
            </SafeAreaWrapper>
        </>
    );
};

export default Checkout;

const s = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingHorizontal: scale(30),
        paddingTop: verticalScale(20),
    },
    borderBottom: {
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 2,
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    bottomContainer: {
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(30),
        paddingHorizontal: scale(20),
    },
    row: {
        justifyContent: 'space-between'
    },
    inputText: {
        marginBottom: verticalScale(5)
    }
});
