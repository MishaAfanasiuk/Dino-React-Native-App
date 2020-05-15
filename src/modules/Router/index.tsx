import {inject, observer} from "mobx-react";
import {navigationRef} from "../../navigation/rootNavigation";
import {HomePage} from "../HomePage";
import {AboutPage} from "../About";
import {MenuPage} from "../Menu";
import {MenuItemSubmenu} from "../MenuItemSubmenu";
import {SalesPage} from "../Sales";
import {UserPage} from "../UserPage";
import {EventPage} from "../Event";
import React, {useEffect} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import {blue} from "../../sharedStyles/styles";
import {HeaderBlock} from "../shared/Header/header";
import {HeaderLogo} from "../shared/Header/HeaderLogo";
import {CoinCounter} from "../shared/Header/CoinCounter";
import {ActivityIndicator, View} from "react-native";
import {LoginPage} from "../Login";
import {RegistrationPage} from "../Registration";
import {loginStore} from "../../store/login";
import {invokeErrorModal} from "../../utis/invokeErrorModal";

const Stack = createStackNavigator();
const pageOptions = {
  headerStyle: {backgroundColor: blue},
  headerTitle: () => <HeaderBlock title={'Dino'}/>,
  headerLeft: () => <HeaderLogo/>,
  headerRight: () => <CoinCounter/>
};

interface RouterProps {
  appStore?: any;
  loginStore?: any
}

const NavigationTabs = () => {
  return (
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
        name="MenuItemSubmenu"
        component={MenuItemSubmenu}
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
      <Stack.Screen
        name={'Login'}
        component={LoginPage}
        options={pageOptions}
      />
      <Stack.Screen
        name={'Register'}
        component={RegistrationPage}
        options={pageOptions}
      />
    </Stack.Navigator>
  )
};

const Spinner = () => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        paddingTop: 64,
        top: 0,
        zIndex: 80,
        position: 'absolute',
      }}>
      <View
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          height: '100%',
          flex: 1,
          justifyContent: 'center'
        }}>
        <ActivityIndicator size="large" color="#ffffff" style={{}}/>
      </View>
    </View>
  )
};


export const Router = inject('appStore', 'loginStore')(observer(({appStore, loginStore}: RouterProps) => {
  const {isLoading} = appStore;
  useEffect(() => {
    loginStore.getUserData();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {
        isLoading ? <Spinner/> : null
      }
      <NavigationTabs/>
    </NavigationContainer>
  )
}));
