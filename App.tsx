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
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {View, Text} from "react-native";
import {AboutPage} from "./src/modules/About";
import {MenuPage} from "./src/modules/Menu";
import {SalesPage} from "./src/modules/Sales";
import {UserPage} from "./src/modules/UserPage";
const pageOptions =  {
  headerStyle: {backgroundColor: '#99D9F4'},
  headerTitle: () => <HeaderBlock title={'Dino'} />,
  headerLeft: () => <HeaderLogo />,
  headerRight: () => <CoinCounter />
};

const Stack = createStackNavigator();
export default function App() {
  return (
    <Provider login={loginStore} menu={menuStore}>
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
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
// export default function App() {
//   const [dataLoaded, setDataLoaded] = useState(false);
//
//   const fetchFonts = () => {
//     return Font.loadAsync({'Solway': require('./src/assets/fonts/Solway-Regular.ttf')});
//   };
//   if (!dataLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setDataLoaded(true)}
//       />
//     );
//   }
//   return (
//     <View>
//       <Text style={{ fontFamily: 'Solway' }}>
//         Open up App.js to start working on your app!
//       </Text>
//     </View>
//   );
// }
