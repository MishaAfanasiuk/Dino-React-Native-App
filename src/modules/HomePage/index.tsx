import React from 'react';
import {homeStyles} from "./styles";
import {SafeAreaView, ScrollView, ScrollViewComponent, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles";
import {Card} from "../shared/Card";
const image = require("../../assets/images/happyHours.jpg")

export const HomePage = (observer(({ navigation }) => {
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <ScrollView contentContainerStyle={homeStyles.wrapper}>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image}/>
        <Card image={image} lastOne/>
      </ScrollView>
    <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
