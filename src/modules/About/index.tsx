import React from 'react';
import {aboutStyles} from "./aboutStyles";
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles"
import {DetailPage} from "../shared/DetailPage";
import {EventTime} from "../shared/EventTimeBlock";
const image = require("../../assets/images/happyHours.jpg");
const sampleText = 'Most components can be customized ' +
  'when they are created, with different parameters. ' +
  'These created parameters are called props, short for ' +
  'properties. For example, one basic React Native component ' +
  'is the Image. When you create an image, you can use a prop ' +
  'named source to control what image it shows.Most components can ' +
  'be customized when they are created, with different parameters. These ' +
  'created parameters are called props, short for properties.'+
  'For example, one basic React Native component is the Image. When ' +
  'you create an image, you can use a prop named source to control what image it shows.'


export const AboutPage = (observer(({ navigation }) => {
  return (
    <View style={sharedStyles.scrollBody}>
      <DetailPage
        image={image} title={'Jazz Band'}
        clarificationBlock={<EventTime from={'19.03 16:00'} to={'19.03 16:00'}/>}
        information={sampleText}
      />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
