import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Philosopher from '../Styled/TextCmp/Philosopher';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import AntDesign from '@react-native-vector-icons/ant-design';
import Colors from '../../utils/colors';
import { scale, verticalScale, moderateScale } from '../../utils/scaling';
import { handleLogout } from '../../screens/User/Profile';

const AdminHeader = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={s.header}>
      <View style={s.title}>
        <Philosopher color="#FFF" size={24}>
          {title ? title : 'Planta'}
        </Philosopher>
      </View>

      <View style={s.icon}>
        <TouchableOpacity onPress={() => navigation.navigate('AddProduct')}>
          <FontAwesome name="plus" color={'#FFF'} size={moderateScale(30)} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <AntDesign name="logout" color={'#FFF'} size={moderateScale(30)} />
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: scale(20),
    justifyContent: 'space-between',
  },
  title: {},
  icon: {
    gap: scale(10),
    flexDirection: 'row',
  },
});
