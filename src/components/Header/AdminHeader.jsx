import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Philosopher from '../Styled/TextCmp/Philosopher';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import Colors from '../../utils/colors';
import { horizontalScale, verticalScale } from '../../utils/scaling';

const AdminHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={s.header}>
      <View style={s.title}>
        <Philosopher color="#FFF" size={24}>
          {title ? title : 'Planta'}
        </Philosopher>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('AddProduct')}
        style={s.icon}
      >
        <FontAwesome name="plus" color={'#FFF'} size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default AdminHeader;

const s = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(20),
  },
  title: {
    flex: 0.9,
  },
  icon: {
    flex: 0.1,
    alignItems: 'flex-end',
  },
});
