// App.tsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';
import ProductScreen from './pages/ProductScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function DetailsTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="User" component={UserScreen} />
      <Tab.Screen name="Product" component={ProductScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
