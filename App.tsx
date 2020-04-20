import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {HomePage} from "./src/modules/HomePage";
import {Locations} from "./src/modules/Locations";
import {loginStore} from './src/store/login';
import {Provider} from "mobx-react";
import {menuStore} from "./src/store/menu";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HeaderBlock} from "./src/modules/shared/Header/header";
import {HeaderLogo} from "./src/modules/shared/Header/HeaderLogo"
import {CoinCounter} from "./src/modules/shared/Header/CoinCounter";
import { Font, AppLoading } from 'expo';
import {View, Text} from "react-native";
import { EventPage } from './src/modules/Event'
import {AboutPage} from "./src/modules/About";
import {MenuPage} from "./src/modules/Menu";
import {SalesPage} from "./src/modules/Sales";
import {UserPage} from "./src/modules/UserPage";
import {blue} from "./src/sharedStyles/styles";
import {newsStore} from "./src/store/news";
import {eventStore} from "./src/store/event";
// import * as Font from 'expo-font';
// import { Font } from "expo";
const pageOptions =  {
  headerStyle: {backgroundColor: blue},
  headerTitle: () => <HeaderBlock title={'Dino'} />,
  headerLeft: () => <HeaderLogo />,
  headerRight: () => <CoinCounter />
};
const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider login={loginStore} menu={menuStore} newsStore={newsStore} eventStore={eventStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={pageOptions}
          />
          <Stack.Screen
            name="About"
            component={AboutPage}
            options={pageOptions}
          />
          <Stack.Screen
            name="Menu"
            component={MenuPage}
            options={pageOptions}
          />
          <Stack.Screen
            name="Sales"
            component={SalesPage}
            options={pageOptions}
          />
          <Stack.Screen
            name="UserPage"
            component={UserPage}
            options={pageOptions}
          />
          <Stack.Screen
            name="Event"
            component={EventPage}
            options={pageOptions}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
// const componentDidMount = () => {
//   return Font.loadAsync({'Solway-Regular': require('./src/assets/fonts/Solway-Regular.ttf')})
// };
// export default function App() {
  // const [fontLoaded, setFontLoaded] = useState(false);
  //
  // if (!fontLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={componentDidMount}
  //       onFinish={() => {
  //         setFontLoaded(true);
  //       }}
  //     />
  //   );
  // }
