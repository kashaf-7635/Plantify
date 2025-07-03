import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ImageCmp from '../Styled/ImageCmp';
import Poppins from '../Styled/TextCmp/Poppins';
import { scale, verticalScale } from '../../utils/scaling';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../utils/colors';

const NotificationCard = ({ product }) => {
  const navigation = useNavigation();

  return (
    <View style={{ marginVertical: verticalScale(10) }}>
      <View style={{ borderBottomColor: '#7D7B7B', borderBottomWidth: 1 }}>
        <Poppins size={16}>Wednesday, April 30th</Poppins>
      </View>
      <View style={s.main}>
        <View style={s.imageView}>
          <ImageCmp
            source={product.image}
            size={77}
            borderRadius={8}
            resizeMode="cover"
          />
        </View>
        <View style={s.textView}>
          <Poppins color={Colors.primary800} size={16} weight="semibold">
            Order Successful
          </Poppins>
          <Poppins color="#000" size={16} textConfig={{ numberOfLines: 1 }}>
            {product?.name} | {product?.category}
          </Poppins>

          <Poppins color="#000">2 items</Poppins>
        </View>
      </View>
    </View>
  );
};

export default NotificationCard;

const s = StyleSheet.create({
  main: {
    flexDirection: 'row',
    marginVertical: verticalScale(5),
  },
  imageView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: scale(20),
  },
});
