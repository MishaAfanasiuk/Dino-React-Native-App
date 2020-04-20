import React, {ReactElement} from 'react';
import {ScrollView, View} from 'react-native';
import {cardBlockStyles} from "./cardBlockStyles";

interface CardBlockProps {
  data: [ReactElement] | []
}

export const CardBlock = (({ data }: CardBlockProps) => {
  return (
    <View style={cardBlockStyles.scrollWrapper}>
      <ScrollView contentContainerStyle={cardBlockStyles.wrapper}>
        {
          data
        }
      </ScrollView>
    </View>
  );
});
