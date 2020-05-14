import React from 'react';
import {dishCountsStyles} from "./dishCountsStyles";
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CustomText} from "../../shared/CustomText";

export const DishCounts = (observer(({ weight, price}) => {
  return (
    <View style={dishCountsStyles.wrapper}>
      <CustomText styles={dishCountsStyles.count} text={weight + 'g'}/>
      <CustomText styles={dishCountsStyles.count} text={price + '$'}/>
    </View>
  );
}));
