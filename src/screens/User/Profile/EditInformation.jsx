import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useMemo, useRef } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import { scale, verticalScale } from '../../../utils/scaling';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import CheckoutInput from '../../../components/InputCmp/CheckoutInput';
import { Formik } from 'formik';

const EditInformation = () => {
    const formikRef = useRef()
    const [editableField, setEditableField] = useState(null);

    const [initialValues, setInitialValues] = useState({
        name: 'Trần Minh Trí',
        email: 'tranminhtri@gmail.com',
        contact: '0123456789',
        address: '60 Láng Hạ, Ba Đình, Hà Nộiio',
    });



    return (
        <>
            <SafeAreaWrapper>
                <BackHeader title={'EDIT INFORMATION'} />

                <Formik
                    innerRef={formikRef}
                    initialValues={initialValues}
                    onSubmit={values => {
                        console.log(values);
                        setInitialValues(values);
                        setEditableField(null);
                    }}
                >
                    {({ handleChange, handleBlur, handleSubmit, values }) => {
                        const isFormChanged = useMemo(() => {
                            return JSON.stringify(values) !== JSON.stringify(initialValues);
                        }, [values, initialValues]);

                        return (

                            <>
                                <View style={s.main}>
                                    <View style={s.text}>
                                        <Poppins color={Colors.textDark}>
                                            The information will be saved for the next purchase. Click
                                            on the details to edit.
                                        </Poppins>
                                    </View>
                                    <CheckoutInput
                                        placeholder={'Full Name'}
                                        onChangeText={handleChange('name')}
                                        onBlur={handleBlur('name')}
                                        value={values.name}
                                        editable={editableField === 'name'}
                                        onPressIn={() => setEditableField('name')}
                                        textColor={editableField === 'name' ? '#000' : null}
                                    />
                                    <CheckoutInput
                                        placeholder={'Email'}
                                        onChangeText={handleChange('email')}
                                        onBlur={handleBlur('email')}
                                        value={values.email}
                                        editable={editableField === 'email'}
                                        onPressIn={() => setEditableField('email')}
                                        textColor={editableField === 'email' ? '#000' : null}
                                    />
                                    <CheckoutInput
                                        placeholder={'Address'}
                                        onChangeText={handleChange('address')}
                                        onBlur={handleBlur('address')}
                                        value={values.address}
                                        editable={editableField === 'address'}
                                        onPressIn={() => setEditableField('address')}
                                        textColor={editableField === 'address' ? '#000' : null}
                                    />
                                    <CheckoutInput
                                        placeholder={'Contact'}
                                        onChangeText={handleChange('contact')}
                                        onBlur={handleBlur('contact')}
                                        value={values.contact}
                                        editable={editableField === 'contact'}
                                        onPressIn={() => setEditableField('contact')}
                                        textColor={editableField === 'contact' ? '#000' : null}
                                    />

                                </View>

                                <View style={s.btnView}>
                                    <ButtonCmp onPress={handleSubmit} variant={'filled'} disabled={!isFormChanged}>
                                        SAVE
                                    </ButtonCmp>
                                </View>
                            </>
                        )
                    }


                    }
                </Formik>
            </SafeAreaWrapper>
        </>
    );
};

export default EditInformation;

const s = StyleSheet.create({
    main: {
        paddingHorizontal: scale(40),
        flex: 1,
    },
    text: {
        marginVertical: verticalScale(30),
    },

    btnView: {
        alignSelf: 'center',
        paddingVertical: verticalScale(20),
    },
});
