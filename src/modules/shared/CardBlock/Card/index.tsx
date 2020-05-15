import React from 'react';
import {cardStyles} from "./cardStyles";
import {View, ImageBackground, Image, TouchableOpacity, GestureResponderEvent} from 'react-native';

interface CardProps {
  image?: Image,
  source: {},
  sale: boolean,
  onPress: (event: GestureResponderEvent) => void,
}

export const Card = ({image, source, sale, onPress}: CardProps) => {
  return (
    <View style={cardStyles.card}>
      <TouchableOpacity style={cardStyles.pressContainer} onPress={onPress}>
        <ImageBackground
          source={source || image}
          imageStyle={{borderRadius: 20}}
          style={cardStyles.image}
        >
          {
            sale && <Image style={cardStyles.saleLabel} source={require("../../../../assets/images/sale.png")} />
          }
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
