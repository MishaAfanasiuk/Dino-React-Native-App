import React, {useCallback} from 'react';
import {aboutStyles} from "../aboutStyles";
import {Image, ImageBackground, ScrollView, TouchableOpacity, View, Linking} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CustomText} from "../../shared/CustomText";

export const ContactsBlock = (observer(({ navigation }) => {
  return (
    <View style={aboutStyles.contactsBlock}>
    <TouchableOpacity onPress={() => {Linking.openURL(`tel:+38 (088) 123 45 67`)}}>
      <CustomText text={`+38 (088) 123 45 67`} styles={aboutStyles.phone}/>
    </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL(`tel:+38 (088) 123 66 87`)}}>
        <CustomText text={`+38 (088) 123 45 67`} styles={aboutStyles.phone}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {Linking.openURL(`mailto:dino@gmail.com`)}}>
        <CustomText text={`dino@gmail.com`} styles={aboutStyles.phone}/>
      </TouchableOpacity>

    </View>
  );
}));
