import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '.';
import Poppins from '../Styled/TextCmp/Poppins';
import ButtonCmp from '../Buttons/ButtonCmp';
import { verticalScale } from '../../utils/scaling';
import { useNavigation } from '@react-navigation/native';

const ConfirmCheckout = forwardRef((props, ref) => {
    const navigation = useNavigation()
    const handleOrderSuccess = () => {
        ref.current?.close();
        navigation.navigate('UserTab', { screen: 'Notification' });

    }
    return (
        <BottomSheet ref={ref}>
            <View>
                <View style={{ marginBottom: verticalScale(10) }}>
                    <Poppins color="#252A31" align="center" size={16} weight='semibold'>Confirm Checkout?</Poppins>

                </View>

                <ButtonCmp onPress={handleOrderSuccess} variant={'filled'}>YES</ButtonCmp>
                <ButtonCmp onPress={() => ref.current.close()}>Cancel</ButtonCmp>
            </View>
        </BottomSheet>
    );
});

export default ConfirmCheckout;

const s = StyleSheet.create({});
