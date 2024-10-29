// App.tsx
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/HomeScreen';
import UserScreen from './pages/UserScreen';
import ProductScreen from './pages/ProductScreen';
import DetailsScreen from './pages/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Icon functions moved outside to avoid re-creation during re-renders
const userIcon = ({color, size}: any) => (
  <Icon name="person-outline" color={color} size={size} />
);

const productIcon = ({color, size}: any) => (
  <Icon name="pricetags-outline" color={color} size={size} />
);

function DetailsTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarIcon: userIcon,
        }}
      />
      <Tab.Screen
        name="Product"
        component={ProductScreen}
        options={{
          tabBarIcon: productIcon,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Details"
          component={DetailsTabNavigator}
          options={{title: 'Hello Awlia Details'}}
        />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
