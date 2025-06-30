/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AuthStack from './src/navigation/AuthStack';
import { useSelector } from 'react-redux';
import UserStack from './src/navigation/UserStack';
import AdminStack from './src/navigation/AdminStack';

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  let currentStack;

  if (!isAuthenticated) {
    currentStack = <AuthStack />;
  } else {
    if (user.role === 'user') {
      currentStack = <UserStack />;
    }
    if (user.role === 'admin') {
      currentStack = <AdminStack />;
    }
  }

  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>{currentStack}</NavigationContainer>
        <Toast />
      </SafeAreaProvider>
    </>
  );
}

export default App;
