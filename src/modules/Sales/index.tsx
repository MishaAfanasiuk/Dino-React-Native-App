import React from 'react';
import {saleStyles} from "./styles";
import {SafeAreaView, ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import {Card} from "../shared/Card";
const image = require("../../assets/images/happyHours.jpg")

export const SalesPage = (observer(({ navigation }) => {
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <ScrollView contentContainerStyle={saleStyles.wrapper}>
        <Card image={image} sale/>
        <Card image={image} sale/>
        <Card image={image} sale/>
        <Card image={image} sale/>
        <Card image={image} sale/>
        <Card image={image} sale/>
        <Card image={image} lastOne/>
      </ScrollView>
      <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
