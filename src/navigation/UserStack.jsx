import { StyleSheet } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/User/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/User/Search';
import NotificationScreen from '../screens/User/Notification';
import ProfileScreen from '../screens/User/Profile';
import UserTabBar from '../components/UserTabBar';

const Tab = createBottomTabNavigator();

const UserStack = () => {
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

export default UserStack;

const styles = StyleSheet.create({});
