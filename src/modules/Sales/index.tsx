import React from 'react';
import {saleStyles} from "./styles";
import {SafeAreaView, ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import {Card} from "../shared/CardBlock/Card";
import {CardBlock} from "../shared/CardBlock";
const image = require("../../assets/images/happyHours.jpg")
const dataExmpl = [{image: image}, {image: image}, {image: image}, {image: image}, {image: image}, {image: image}];

export const SalesPage = (observer(({ navigation }) => {
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <CardBlock data={dataExmpl} sale/>
      <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
