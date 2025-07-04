import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import BottomSheet from '.';
import Poppins from '../Styled/TextCmp/Poppins';

const DeleteAllCartItems = forwardRef((props, ref) => {
    return (
        <BottomSheet ref={ref}>
            <View style={{ backgroundColor: 'black', padding: 20 }}>
                <Poppins color="#fff">Delete All Items?</Poppins>
            </View>
        </BottomSheet>
    );
});

export default DeleteAllCartItems;

const s = StyleSheet.create({});
