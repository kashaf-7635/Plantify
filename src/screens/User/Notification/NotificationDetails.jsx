import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SafeAreaWrapper from '../../../components/SafeAreaWrapper'
import Poppins from '../../../components/Styled/TextCmp/Poppins'
import Colors from '../../../utils/colors'
import { scale, verticalScale } from '../../../utils/scaling'
import { useSelector } from 'react-redux'
import Error from '../../../components/Error'
import Loading from '../../../components/Loading'
import { STATUSES } from '../../../store/statuses'
import SearchCard from '../../../components/ProductCard/SearchCard'
import ButtonCmp from '../../../components/Buttons/ButtonCmp'

const NotificationDetails = () => {
    const values = {
        name: 'Trần Minh Trí',
        email: 'tranminhtri@gmail.com',
        contact: '0123456789',
        address: '60 Láng Hạ, Ba Đình, Hà Nộiio',
    }


    const {
        data: products,
        status,
        error,
    } = useSelector(state => state.products);

    if (error) {
        console.log(error);
        return <Error message={error} />;
    }

    if (status === STATUSES.LOADING) {
        return <Loading />;
    }
    return (
        <SafeAreaWrapper>
            <BackHeader title={'NOTIFICATION'} />

            <View style={{ marginVertical: verticalScale(30), alignItems: 'center' }}>
                <Poppins color={Colors.primary800}>Order Successful!</Poppins>
            </View>
            <ScrollView style={{ flex: 1 }}>


                <View style={{ paddingHorizontal: scale(30) }}>
                    <View >
                        <View style={s.borderBottom}>
                            <Poppins align='center' weight="semibold" color="#221F1F" size={16}>
                                Personal Information
                            </Poppins>

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

                    <View >
                        <View style={s.borderBottom}>
                            <Poppins align='center' weight="semibold" color="#221F1F" size={16}>
                                Delivery Method
                            </Poppins>


                        </View>
                        <View style={s.inputText}>
                            <Poppins color='#7D7B7B'>Quick Shipping - $15</Poppins>
                            <Poppins color='#7D7B7B'>Expected Shipping Date:  May 5th</Poppins>
                        </View>

                    </View>

                    <View>
                        <View style={s.borderBottom}>
                            <Poppins align='center' weight="semibold" color="#221F1F" size={16}>
                                Payment Method
                            </Poppins>


                        </View>
                        <View style={s.inputText}>
                            <Poppins color='#7D7B7B'>VISA/MASTERCARD</Poppins>

                        </View>

                    </View>

                    <FlatList
                        scrollEnabled={false}
                        ListHeaderComponent={
                            <View style={[s.borderBottom, { justifyContent: 'flex-start' }]}>
                                <Poppins weight="semibold" color="#221F1F" size={16}>
                                    Your Item
                                </Poppins>


                            </View>
                        }
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: verticalScale(10) }}
                        data={products}
                        keyExtractor={(item, index) => item + index}
                        renderItem={({ item, index }) => {
                            return <SearchCard product={item} />;
                        }}
                    />
                </View>
            </ScrollView>


            <View style={s.bottom}>
                <View style={s.row}>
                    <Poppins size={16} color='#000' weight='semibold'>You paid</Poppins>
                    <Poppins size={16} color='#000' weight='semibold'>$515</Poppins>

                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCmp variant={'filled'}>Check out Planting Guide</ButtonCmp>
                    <ButtonCmp >Back to Homepage</ButtonCmp>
                </View>

            </View>


        </SafeAreaWrapper>
    )
}

export default NotificationDetails

const s = StyleSheet.create({
    borderBottom: {
        borderBottomColor: '#ABABAB',
        borderBottomWidth: 2,
        marginVertical: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputText: {
        marginBottom: verticalScale(10)
    },
    bottom: {
        paddingHorizontal: scale(20),
        paddingVertical: verticalScale(30),
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})