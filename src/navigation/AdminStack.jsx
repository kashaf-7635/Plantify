import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../utils/colors';
import Home from '../screens/Admin/Home';
import AddProduct from '../screens/Admin/AddProduct';
import Product from '../screens/Admin/Product';
import Philosopher from '../components/Styled/TextCmp/Philosopher';
const Stack = createNativeStackNavigator();

const AdminStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={Home} options={{}} />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen name="Product" component={Product} />
    </Stack.Navigator>
  );
};

export default AdminStack;

const styles = StyleSheet.create({});
