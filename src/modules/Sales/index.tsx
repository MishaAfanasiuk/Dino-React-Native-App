import React, {ReactElement} from 'react';
import {SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CardBlock} from "../shared/CardBlock";
import {Card} from "../shared/CardBlock/Card";
const image = require("../../assets/images/happyHours.jpg");
const dataExample = [{image: image}, {image: image}, {image: image}, {image: image}, {image: image}, {image: image}];

export const SalesPage = (observer(({ navigation }) => {
  const data: [ReactElement] = dataExample.map(({ image }, index) => {
    return <Card source={image} sale={false} onPress={() => {}} key={index} />
  });

  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <CardBlock data={data} />
    </SafeAreaView>
  );
}));
