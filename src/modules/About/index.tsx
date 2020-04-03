import React from 'react';
import {aboutStyles} from "./aboutStyles";
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles"

export const AboutPage = (observer(({ navigation }) => {
  return (
    <View style={sharedStyles.body}>
      <CustomText text={'About'} />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
