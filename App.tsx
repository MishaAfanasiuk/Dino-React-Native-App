import 'react-native-gesture-handler';
import React from 'react';
import {HomePage} from "./src/modules/HomePage";
import {loginStore} from './src/store/login';
import {Provider} from "mobx-react";
import {menuStore} from "./src/store/menu";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBlock} from "./src/modules/shared/Header/header";
import {HeaderLogo} from "./src/modules/shared/Header/HeaderLogo/headerLogo"
import {CoinCounter} from "./src/modules/shared/Header/CoinCounter/coinCounter";

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider login={loginStore} menu={menuStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={
              {
                headerStyle: {backgroundColor: '#99D9F4'},
                headerTitle: () => <HeaderBlock title={'Dino'} />,
                headerLeft: () => <HeaderLogo />,
                headerRight: () => <CoinCounter />
              }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
