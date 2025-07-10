import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import ImageCmp from '../../../components/Styled/ImageCmp';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Colors from '../../../utils/colors';
import { scale } from '../../../utils/scaling';

const PlantingGuide = ({ navigation }) => {
    const Data = [
        { id: 1, image: require('../../../assets/images/plant.png'), name: 'Black Panse' },
        { id: 2, image: require('../../../assets/images/plant.png'), name: 'Black Panse' },
        { id: 3, image: require('../../../assets/images/plant.png'), name: 'Black Panse' },
    ]
    return (
        <SafeAreaWrapper>
            <BackHeader title={'PLANTING GUIDE'} />

            <FlatList
                data={Data}
                keyExtractor={(item, index) => item.id.toString()}
                renderItem={({ item }) => {
                    return <TouchableOpacity style={s.card} onPress={() => navigation.navigate('PlantingGuideDetails', { plantId: item })}>
                        <View style={s.image}>
                            <ImageCmp
                                source={item?.image}
                                height={50}
                                width={57}
                            />
                        </View>
                        <View style={s.title}>
                            <Poppins color={Colors.textDark} size={16}>
                                {item?.name}
                            </Poppins>
                            <Poppins color="#7D7B7B">Planting Guide</Poppins>
                        </View>
                    </TouchableOpacity>
                }}
            />


        </SafeAreaWrapper>
    );
};

export default PlantingGuide;

const s = StyleSheet.create({
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: scale(20),
        marginHorizontal: scale(40)
    },
    image: {

    },
    title: {
        flex: 1,
        paddingHorizontal: scale(30),
    },
});
