import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '.';
import Poppins from '../Styled/TextCmp/Poppins';
import ButtonCmp from '../Buttons/ButtonCmp';
import { verticalScale } from '../../utils/scaling';

const DeleteAllCartItems = forwardRef((props, ref) => {
    return (
        <BottomSheet ref={ref}>
            <View>
                <View style={{ marginBottom: verticalScale(10) }}>
                    <Poppins color="#252A31" align="center" size={16} weight='semibold'>Empty Cart?</Poppins>
                    <Poppins color="#7D7B7B" align="center">This cannot be undone</Poppins>
                </View>

                <ButtonCmp variant={'filled'}>YES</ButtonCmp>
                <ButtonCmp onPress={() => ref.current.close()}>Cancel</ButtonCmp>
            </View>
        </BottomSheet>
    );
});

export default DeleteAllCartItems;

const s = StyleSheet.create({});
