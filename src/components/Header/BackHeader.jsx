import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Poppins from '../Styled/TextCmp/Poppins';
import Entypo from '@react-native-vector-icons/entypo';
import { horizontalScale } from '../../utils/scaling';
import { useNavigation } from '@react-navigation/native';

const BackHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={20} />
      </TouchableOpacity>

      <View style={s.titleView}>
        <Poppins weight="semibold" color="#000" size={16}>
          {title}
        </Poppins>
      </View>
    </View>
  );
};

export default BackHeader;

const s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20),
  },
  titleView: {
    flex: 1,
    alignItems: 'center',
  },
});
