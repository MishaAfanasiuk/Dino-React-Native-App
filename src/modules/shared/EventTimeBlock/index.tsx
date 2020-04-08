import React from 'react';
import {eventTimeStyles} from "./eventTimeStyles";
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CustomText} from "../CustomText";

export const EventTime = (observer(({ from, to}) => {
  return (
    <View style={eventTimeStyles.wrapper}>
      <CustomText styles={eventTimeStyles.when} text={'When: '}/>
      <CustomText styles={eventTimeStyles.time} text={from}/>
      <CustomText styles={eventTimeStyles.time} text={` - ${to}`}/>
    </View>
  );
}));
