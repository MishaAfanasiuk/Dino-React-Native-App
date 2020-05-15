import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {DetailPage} from "../shared/DetailPage";
import {EventTime} from "../shared/EventTimeBlock";
import {EventStoreInterface} from "../../store/event";
import {getFullImageUrl} from "../../utis/getImageUrl";
import {parseTime} from "../../utis/parseTime";
import {CustomText} from "../shared/CustomText";
import {DishCounts} from "./DishCounts";

interface DishPageProps {
  eventStore: EventStoreInterface,
  navigation: any,
  route: any
}

export const DishPage = (observer(({ navigation, eventStore, route }: DishPageProps) => {
  const { item } = route.params;

  return (
    <View style={sharedStyles.scrollBody}>
      {
        !item ? (<Text>Spinner should be here )</Text>) :
          (
            <DetailPage
              source={{uri: getFullImageUrl(item.imageSrc)}}
              title={item.name}
              clarificationBlock={
                <DishCounts weight={item.weight} price={item.price}/>
              }
              information={item.ingredients.reduce((accumulator, currentValue) => accumulator + ', ' + currentValue)}
            />
          )
      }
    </View>
  );
}));
