import React from 'react';
import {cardStyles} from "./cardStyles";
import {View, ImageBackground, Image} from 'react-native';
import {observer} from 'mobx-react';

export const Card = (observer(({ navigation, image, source, lastOne, sale}) => {
  return (
    <View style={cardStyles.card}>
      {!lastOne &&
        <ImageBackground source={source || image} imageStyle={{ borderRadius: 20 }} style={cardStyles.image}>
          {
            sale && <Image style={cardStyles.saleLabel} source={require("../../../assets/images/sale.png")} />
          }
        </ImageBackground>
      }
    </View>
  );
}));
