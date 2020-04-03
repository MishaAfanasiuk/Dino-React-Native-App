import React from 'react';
import {aboutStyles} from "./aboutStyles";
import {Button, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import { Locations } from '../Locations';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles"

export const AboutPage = inject('menu')(observer(({ navigation, menu }) => {
  return (
    <View style={sharedStyles.body}>
      <CustomText text={'About'} />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
