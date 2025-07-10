import {
  InteractionManager,
  SectionList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SafeAreaWrapper from '../../../components/SafeAreaWrapper';
import ButtonCmp from '../../../components/Buttons/ButtonCmp';
import BackHeader from '../../../components/Header/BackHeader';
import { scale, verticalScale } from '../../../utils/scaling';
import { persistor, store } from '../../../store';
import ImageCmp from '../../../components/Styled/ImageCmp';
import Poppins from '../../../components/Styled/TextCmp/Poppins';

export const handleLogout = async () => {
  store.dispatch({ type: 'RESET_STORE' });
  await persistor.purge();
};



const ProfileScreen = ({ navigation }) => {
  const DATA = [
    {
      title: 'General',
      data: [
        { label: 'Edit Information', onPress: () => navigation.navigate('EditInformation') },
        { label: 'Planting Guide', onPress: () => navigation.navigate('PlantingGuide') },
        { label: 'Transaction History' },
        { label: ' Q & A', onPress: () => navigation.navigate('Faqs') },
      ],
    },
    {
      title: 'Security',
      data: [
        { label: 'Terms and Policy' },
        { label: 'Security Policy' },
        { label: 'Logout', onPress: handleLogout },
      ],
    },
  ];
  return (
    <SafeAreaWrapper>
      <BackHeader title={'PROFILE'} />
      <View style={s.main}>
        <View style={s.profile}>
          <View style={s.avatar}>
            <ImageCmp
              size={39}
              borderRadius={39 / 2}
              source={require('../../../assets/images/avatar.png')}
            />
          </View>
          <View style={s.textView}>
            <Poppins color="#000" size={16}>
              Trần Minh Trí
            </Poppins>
            <Poppins color="#7F7F7F">tranminhtri@gmail.com</Poppins>
          </View>
        </View>

        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={item.onPress ? item.onPress : null}
              style={s.item}
            >
              <Poppins size={16} color={item.label === 'Logout' ? '#FF3B30' : '#000'}>
                {item?.label}
              </Poppins>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <View style={s.borderBottom}>
              <Poppins size={16} color="#7F7F7F">
                {title}
              </Poppins>
            </View>
          )}
        />
      </View>
    </SafeAreaWrapper>
  );
};

export default ProfileScreen;

const s = StyleSheet.create({
  main: {
    paddingHorizontal: scale(30),
  },
  profile: {
    flexDirection: 'row',

    paddingVertical: verticalScale(20),
  },
  textView: {
    flex: 1,
    paddingHorizontal: scale(20),
  },
  item: {
    marginBottom: verticalScale(10),
  },
  borderBottom: {
    borderBottomColor: '#ABABAB',
    borderBottomWidth: 1,
    marginVertical: verticalScale(10),
  },
});
