const BackHeader = ({ title, cartIcon, onDeleteAll }) => {
  const navigation = useNavigation();
  const route = useRoute();

  const isCartScreen = route.name === 'Cart';

  return (
    <View style={s.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Entypo name="chevron-thin-left" size={moderateScale(20)} />
      </TouchableOpacity>

      <View style={s.titleView}>
        <Poppins weight="semibold" color="#000" size={16}>
          {title}
        </Poppins>
      </View>

      {cartIcon && (
        <TouchableOpacity
          onPress={() => isCartScreen ? onDeleteAll?.() : navigation.navigate('Cart')}
        >
          <Feather
            name={isCartScreen ? 'trash-2' : 'shopping-cart'}
            color={Colors.textDark}
            size={moderateScale(25)}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
