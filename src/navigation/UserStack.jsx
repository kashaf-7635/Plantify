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
import ProductListing from '../screens/User/ProductListing';
import Cart from '../screens/User/Cart';
import Checkout from '../screens/User/Checkout';
import EditInformation from '../screens/User/Profile/EditInformation';
import PlantingGuide from '../screens/User/Profile/PlantingGuide';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="EditInformation" component={EditInformation} />
      <Tab.Screen name="PlantingGuide" component={PlantingGuide} />
    </Stack.Navigator>
  );
};

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
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
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
      <Stack.Screen name="ProductListing" component={ProductListing} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
  );
};

export default UserStack;

const s = StyleSheet.create({});
