import 'react-native-gesture-handler';
import React from 'react';
import {HomePage} from "./src/modules/HomePage";
import {loginStore} from './src/store/login';
import {Provider} from "mobx-react";
import {menuStore} from "./src/store/menu";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider login={loginStore} menu={menuStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{title: 'Welcome'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
