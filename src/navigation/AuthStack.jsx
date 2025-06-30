import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../utils/colors';
import GetStarted from '../screens/Auth/GetStarted';
import Signup from '../screens/Auth/Signup';
import Login from '../screens/Auth/Login';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} options={{}} />
      <Stack.Screen name="Signup" component={Signup} options={{}} />
      <Stack.Screen name="Login" component={Login} options={{}} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
