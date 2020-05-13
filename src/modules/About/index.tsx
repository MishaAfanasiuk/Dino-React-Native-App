import React from 'react';
import {aboutStyles} from "./aboutStyles";
import {Image, ImageBackground, SafeAreaView, ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles"
import {IconBlock} from "./IconBlock";
const background = require("../../assets/images/cafe_background.jpeg")
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
    <View style={sharedStyles.body}>
    <ScrollView contentContainerStyle={aboutStyles.scrollWrapper} bounces={false}>
      <ImageBackground source={background} style={aboutStyles.background}>
        <Image style={aboutStyles.logo} source={require("../../assets/images/dino.jpg")} />
      </ImageBackground>
      <View style={aboutStyles.titleBlock}>
        <CustomText styles={sharedStyles.title} text={'Dino\nRrrrestaurant'}/>
        <IconBlock />
      </View>
      <View style={aboutStyles.textBlock}>
        <CustomText styles={sharedStyles.infoText} text={sampleText}/>
      </View>
    </ScrollView>
    </View>
  );
}));
