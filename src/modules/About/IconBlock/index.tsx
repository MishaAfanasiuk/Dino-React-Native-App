import React, {useCallback} from 'react';
import {aboutStyles} from "../aboutStyles";
import {Image, ImageBackground, ScrollView, TouchableOpacity, View, Linking} from 'react-native';
import {inject, observer} from 'mobx-react';
const img = require("../../../assets/images/facebook.png")

export const IconBlock = inject('aboutStore')(observer(({ navigation, aboutStore}) => {
  return (
    <View style={aboutStyles.iconBlock}>
      <TouchableOpacity onPress={aboutStore.displayingContacts}>
        <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/call.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={aboutStore.displayingMap}>
        <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/geo.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL('https://facebook.com')}}>
        <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/facebook.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL('https://instagram.com')}}>
        <ImageBackground style={aboutStyles.icon} source={require("../../../assets/images/instagram.png")} />
      </TouchableOpacity>

    </View>
  );
}));
