import React from 'react';
import {aboutStyles} from "./aboutStyles";
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles"
import {DetailPage} from "../shared/DetailPage";
const image = require("../../assets/images/happyHours.jpg")

export const AboutPage = (observer(({ navigation }) => {
  return (
    <View style={sharedStyles.scrollBody}>
      <DetailPage image={image} title={'Jazz Band'}/>
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
