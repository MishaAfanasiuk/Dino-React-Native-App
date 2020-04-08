import React from 'react';
import {homeStyles} from "./styles";
import {Button, Text, View} from 'react-native';
import {observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";

export const MenuPage = (observer(({ navigation }) => {
  return (
    <View style={sharedStyles.body}>
        <CustomText text={'Menu'} />
      <FooterComponent navigation={navigation}/>
    </View>
  );
}));
