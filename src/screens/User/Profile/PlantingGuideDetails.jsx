import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import BackHeader from '../../../components/Header/BackHeader';
import Colors from '../../../utils/colors';
import { moderateScale, scale, verticalScale } from '../../../utils/scaling';
import ImageCmp from '../../../components/Styled/ImageCmp';
import Entypo from '@react-native-vector-icons/entypo';
import Poppins from '../../../components/Styled/TextCmp/Poppins';
import Accordion from 'react-native-collapsible/Accordion';

const StepAccordion = ({ steps }) => {
    const [activeSections, setActiveSections] = useState([]);

    const renderHeader = (step, _, isActive) => (
        <View style={s.stepItem}>
            <Poppins color={Colors.textDark}>{step.stepTitle}</Poppins>
            <Entypo
                name={isActive ? 'chevron-thin-up' : 'chevron-thin-down'}
                color={'#000'}
                size={20}
            />
        </View>
    );

    const renderContent = (step) => (
        <View style={{ paddingVertical: verticalScale(10) }}>
            {step.subSteps.map((sub, i) => (
                <View key={i} style={{ marginBottom: verticalScale(10) }}>
                    <Poppins color={Colors.textDark}>{sub}</Poppins>
                </View>
            ))}
        </View>
    );

    return (
        <Accordion
            sections={steps}
            activeSections={activeSections}
            renderHeader={renderHeader}
            renderContent={renderContent}
            onChange={setActiveSections}
            underlayColor="transparent"
            expandMultiple={false} 
        />
    );
};


const PlantingGuideDetails = ({ route }) => {
    const plantId = route?.params?.plantId;
    const [activeSections, setActiveSections] = useState([]);
    const SECTIONS = [
        {
            title: 'Basic Knowledge',
            content: [
                {
                    stepTitle: 'Step 1: Prepare all tools and seeds',
                    subSteps: ['Light: Orchid grass belongs to the group of plants that prefer bright or partially shaded light. Natural light can be used, but the plant will burn if directly planted under sunlight.',
                        'Soil: Ensure the soil has good drainage',
                        'Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.',
                        'Temperature: Orchid grass thrives well at an optimal temperature ranging from 18 to 24 °C, suitable for the tropical climate in our country.'

                    ],
                },
                {
                    stepTitle: 'Step 2: Seeding',
                    subSteps: ['Light: Orchid grass belongs to the group of plants that prefer bright or partially shaded light. Natural light can be used, but the plant will burn if directly planted under sunlight.',
                        'Soil: Ensure the soil has good drainage',
                        'Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.',
                        'Temperature: Orchid grass thrives well at an optimal temperature ranging from 18 to 24 °C, suitable for the tropical climate in our country.'

                    ],
                },
                {
                    stepTitle: 'Step 3: Caring',
                    subSteps: ['Light: Orchid grass belongs to the group of plants that prefer bright or partially shaded light. Natural light can be used, but the plant will burn if directly planted under sunlight.',
                        'Soil: Ensure the soil has good drainage',
                        'Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.',
                        'Temperature: Orchid grass thrives well at an optimal temperature ranging from 18 to 24 °C, suitable for the tropical climate in our country.'

                    ],
                },

            ],
        },
        {
            title: 'Stages',
            content: [
                {
                    stepTitle: '1. Watering Seeds (48h) ',
                    subSteps: ['Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.'],
                },
                {
                    stepTitle: '2. Start Growing (3-5 days)',
                    subSteps: ['Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.'],
                },
                {
                    stepTitle: '3. Growing (2-3 weeks)',
                    subSteps: ['Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.'],
                },
                {
                    stepTitle: '4. Maturing (4-6 weeks)',
                    subSteps: ['Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.'],
                },
                {
                    stepTitle: '5. Blooming (4-6 weeks)',
                    subSteps: ['Water: Distilled water or rainwater can be used, avoid using hard water. Water regularly, keeping the soil moist but not soggy.'],
                },
            ],
        },
    ];

    const renderHeader = (section, _, isActive) => (
        <View style={s.accordianTitle}>
            <Poppins color="#000" size={16} weight="semibold">
                {section.title}
            </Poppins>
            <Entypo name={isActive ? 'minus' : 'plus'} color={'#000'} size={24} />
        </View>
    );


    const renderContent = (section) => {
        return (
            <StepAccordion steps={section.content} />
        );
    };


    return (
        <SafeAreaWrapper>
            <BackHeader title={plantId?.name || 'loading...'} />
            <ScrollView style={{ flex: 1 }}>
                <View style={s.imageView}>
                    <ImageCmp
                        source={plantId?.image}
                        bgColor="transparent"
                        height={268}
                        width={375}
                    />

                    <View style={[s.circle, s.left]}>
                        <Entypo name="chevron-thin-left" size={moderateScale(15)} />
                    </View>

                    <View style={[s.circle, s.right]}>
                        <Entypo name="chevron-thin-right" size={moderateScale(15)} />
                    </View>
                </View>

                <View style={s.btnRow}>
                    <View style={s.btn}>
                        <Poppins color="#FFF">Plant</Poppins>
                    </View>
                    <View style={s.btn}>
                        <Poppins color="#FFF">Outdoor</Poppins>
                    </View>
                </View>

                <View style={s.listContainer}>



                    <Accordion
                        sectionContainerStyle={s.list}
                        sections={SECTIONS}
                        activeSections={activeSections}
                        renderHeader={renderHeader}
                        renderContent={renderContent}
                        onChange={setActiveSections}
                        underlayColor="transparent"
                    />
                </View>

            </ScrollView>




        </SafeAreaWrapper>
    );
};

export default PlantingGuideDetails;

const s = StyleSheet.create({
    imageView: {
        width: '100%',
        height: verticalScale(268),
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        marginTop: verticalScale(30),
    },
    circle: {
        width: scale(24),
        height: scale(24),
        backgroundColor: 'white',
        borderRadius: scale(24 / 2),
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    left: {
        left: scale(20),
        top: '50%',
        marginTop: -scale(12),
    },
    right: {
        right: scale(20),
        top: '50%',
        marginTop: -scale(12),
    },
    btnRow: {
        flexDirection: 'row',
        paddingHorizontal: scale(40),
        paddingVertical: verticalScale(20),
        gap: scale(5),
    },
    btn: {
        backgroundColor: Colors.primary800,
        height: verticalScale(28),
        minWidth: scale(60),
        paddingHorizontal: scale(10),
        borderRadius: moderateScale(4),
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    listContainer: {
        paddingHorizontal: scale(30),
        paddingVertical: verticalScale(20),
    },
    list: {
        borderBottomColor: Colors.primary800,
        borderBottomWidth: 2,
        marginBottom: verticalScale(20)
    },
    accordianTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(10),

    },
    stepItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: verticalScale(10)
    },


});
