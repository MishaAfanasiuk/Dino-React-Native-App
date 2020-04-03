import React from 'react';
import {homeStyles} from "./styles";
import {Button, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import { Locations } from '../Locations';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles";

export const HomePage = inject('menu')(observer(({ navigation, menu }) => {
  return (
    <View style={sharedStyles.body}>
      <CustomText onPress={menu.getMenu} text={'Home'} />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
