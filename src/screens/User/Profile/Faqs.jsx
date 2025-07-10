import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Accordion from 'react-native-collapsible/Accordion';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Entypo from '@react-native-vector-icons/entypo';
import Colors from '../../../utils/colors';
import { scale, verticalScale } from '../../../utils/scaling';

const Faqs = () => {
    const [activeSections, setActiveSections] = useState([]);

    const FaqsData = [
        {
            title: 'How long will it take for my order to arrive?',
            content:
                'Orders placed via Standard shipping will be processed within 2-8 business days and will be in transit for 1-5 days...',
        },
        {
            title: 'Where do you ship?',
            content: 'We ship to all 63 provinces in Vietnam.',
        },
        {
            title: 'If I order more than one plant, will they ship separately?',
            content:
                'Yes, each individual plant ships separately. Plants may arrive on different days...',
        },
        {
            title: 'How do I order several plants to go to different addresses?',
            content:
                'If you’re ordering 5+ plants to different addresses, our support team can assist...',
        },
        {
            title: 'Các sản phẩm Planta có phải là hữu cơ không?',
            content:
                'You can cancel within 12 hours. After that, it’s not possible once shipped...',
        },
        {
            title: 'What if I need to cancel my order?',
            content: 'We begin work on each order soon after it is placed. To cancel an order, you must within 12 hours of your order being placed and we will process a refund at our discretion. After that, it is not possible to cancel your order. We are unable to cancel or make any changes to orders after they have shipped.'
        }
    ];

    const renderHeader = (section, _, isActive) => (
        <View style={s.header}>
            <View style={{ flex: 1, marginRight: scale(10) }}>
                <Poppins weight='semibold' color={'#000'} size={16}>{section.title}</Poppins>
            </View>

            <Entypo
                name={isActive ? 'chevron-thin-up' : 'chevron-thin-down'}
                color={'#000'}
                size={20}
            />
            <View></View>
        </View>
    );

    const renderContent = section => (
        <View>
            <Poppins color='#7D7B7B' size={16}>{section.content}</Poppins>
        </View>
    );

    return (
        <SafeAreaWrapper>
            <BackHeader title={'FAQS'} />
            <ScrollView style={{ flex: 1, paddingTop: verticalScale(20) }}>


                <Accordion
                    sectionContainerStyle={s.list}
                    sections={FaqsData}
                    activeSections={activeSections}
                    renderHeader={renderHeader}
                    renderContent={renderContent}
                    onChange={setActiveSections}
                    underlayColor="transparent"
                    expandMultiple={false}
                />
            </ScrollView>
        </SafeAreaWrapper>
    );
};

export default Faqs;

const s = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: verticalScale(30),
        alignItems:'center'
    },
    list: {
        paddingHorizontal: scale(40),
        marginVertical: verticalScale(10)
    },
});
