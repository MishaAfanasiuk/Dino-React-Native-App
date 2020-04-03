import React from 'react';
import {homeStyles} from "./styles";
import {Button, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import { Locations } from '../Locations';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";

export const SalesPage = inject('menu')(observer(({ navigation, menu }) => {
  return (
    <View style={sharedStyles.body}>
      <CustomText text={'Sales'} />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
