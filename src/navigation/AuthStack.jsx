import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from '../utils/colors';
import GetStarted from '../screens/Auth/GetStarted';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="GetStarted" component={GetStarted} options={{}} />
    </Stack.Navigator>
  );
};

export default AuthStack;

const styles = StyleSheet.create({});
