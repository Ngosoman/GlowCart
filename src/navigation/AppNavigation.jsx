import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Onboarding from '../screens/Onboarding';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen 
          name="Onboarding" 
          component={Onboarding} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options={{ title: 'Create Account' }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="ProductDetails" 
          component={ProductDetails} 
          options={{ title: 'Product Details' }}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: 'My Profile' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;