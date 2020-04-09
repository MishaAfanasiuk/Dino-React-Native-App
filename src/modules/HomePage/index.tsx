import React from 'react';
import {homeStyles} from "./styles";
import {SafeAreaView, ScrollView, ScrollViewComponent, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles";
import {Card} from "../shared/CardBlock/Card";
import {CardBlock} from "../shared/CardBlock";
const image = require("../../assets/images/happyHours.jpg")
const dataExmpl = [{image: image}, {image: image}, {image: image}, {image: image}, {image: image}, {image: image}];

export const HomePage = (observer(({ navigation }) => {
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <CardBlock data={dataExmpl} />
    <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
