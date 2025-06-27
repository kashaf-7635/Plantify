import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../utils/colors';
import Home from '../screens/Admin/Home';
import AddProduct from '../screens/Admin/AddProduct';
import Product from '../screens/Admin/Product';
import Philosopher from '../components/Styled/TextCmp/Philosopher';
import HomeScreen from '../screens/User/Home';
const Stack = createNativeStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{}} />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
