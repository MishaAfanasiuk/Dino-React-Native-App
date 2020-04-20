import React from 'react';
import {aboutStyles} from "../aboutStyles";
import {Image, ImageBackground, ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
const img = require("../../../assets/images/facebook.png")

export const IconBlock = (observer(({ navigation }) => {
  return (
    <View style={aboutStyles.iconBlock}>
      <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/call.png")} />
      <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/geo.png")} />
      <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/facebook.png")} />
      <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/instagram.png")} />
    </View>
  );
}));
