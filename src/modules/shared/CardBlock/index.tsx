import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {Card} from "./Card";
import {cardBlockStyles} from "./cardBlockStyles";
const image = require("../../../assets/images/happyHours.jpg");

export const CardBlock = (observer(({ navigation, data, sale}) => {
  return (
    <View style={cardBlockStyles.scrollWrapper}>
      <ScrollView contentContainerStyle={cardBlockStyles.wrapper}>
        {
          data.map((item) => {
            return (<Card image={item.image} sale={sale}/>)
          })
        }
      </ScrollView>
    </View>
  );
}));
