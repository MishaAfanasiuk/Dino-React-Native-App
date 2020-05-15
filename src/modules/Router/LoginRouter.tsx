import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {LoginPage} from "../Login";
import {RegistrationPage} from "../Registration";

const Stack = createStackNavigator();

export const LoginRouter = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'Login'} component={LoginPage} />
        <Stack.Screen name={'Register'} component={RegistrationPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
