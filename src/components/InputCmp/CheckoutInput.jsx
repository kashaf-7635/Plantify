import { StyleSheet, TextInput, View, Pressable } from 'react-native';
import React from 'react';
import Colors from '../../utils/colors';
import Fonts from '../../utils/fonts';
import { moderateScale, verticalScale } from '../../utils/scaling';

const CheckoutInput = ({
    placeholder,
    onChangeText,
    onBlur,
    value,
    iconCmp,
    textColor,
    onPressIn,
    editable = true,
    ...rest
}) => {
    return (
        <View style={s.container}>
            <Pressable style={s.inputView} onPressIn={onPressIn}>
                <TextInput
                    placeholderTextColor={'#7D7B7B'}
                    style={[s.input, textColor && { color: textColor }]}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    value={value}
                    editable={editable}
                    {...rest}
                />
            </Pressable>
            {iconCmp && <View style={s.icon}>{iconCmp}</View>}
        </View>
    );
};

export default CheckoutInput;


const s = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 2,
        marginTop: verticalScale(10),
        height: verticalScale(33),
    },
    inputView: {
        flex: 1,
    },
    input: {
        color: '#7D7B7B',
        fontSize: moderateScale(14),
        fontFamily: Fonts.Poppins.regular,
        flex: 1,
        paddingVertical: 0,
        lineHeight: moderateScale(22),
    },
    icon: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
