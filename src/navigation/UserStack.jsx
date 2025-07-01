import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/User/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/User/Search';
import NotificationScreen from '../screens/User/Notification';
import ProfileScreen from '../screens/User/Profile';
import UserTabBar from '../components/UserTabBar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetails from '../screens/User/ProductDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const UserTab = () => {
  return (
    <Tab.Navigator
      tabBar={props => <UserTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Notification" component={NotificationScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const UserStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Stack.Screen name="UserTab" component={UserTab} options={{}} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

export default UserStack;

const styles = StyleSheet.create({});
