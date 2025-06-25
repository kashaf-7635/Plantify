/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './src/utils/colors';
import Philosopher from './src/components/Styled/TextCmp/Philosopher';
import AddProduct from './src/screens/AddProduct';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={({ route }) => ({
            headerTintColor: Colors.textPrimary,
            headerStyle: { backgroundColor: Colors.bgPrimary },
          })}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerTitle: () => (
                <Philosopher size={18} weight="bold">
                  Plantify
                </Philosopher>
              ),
            }}
          />
          <Stack.Screen
            name="AddProduct"
            component={AddProduct}
            options={{
              headerTitle: () => (
                <Philosopher size={18} weight="bold">
                  Add New Plant
                </Philosopher>
              ),
              presentation: 'modal',
            }}
          />
          <Stack.Screen name="Product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
