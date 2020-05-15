import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {DetailPage} from "../shared/DetailPage";
import {EventTime} from "../shared/EventTimeBlock";
import {EventStoreInterface} from "../../store/event";
import {getFullImageUrl} from "../../utis/getImageUrl";
import {parseTime} from "../../utis/parseTime";

interface SalesPageProps {
  eventStore: EventStoreInterface,
  navigation: any,
  route: any
}

export const DiscountPage = inject('eventStore')
(observer(({ navigation, eventStore, route }: SalesPageProps) => {
  const { eventId } = route.params;

  useEffect(() => {
    eventStore.getSale(eventId);
  }, [eventId]);

  const { sale } = eventStore;

  return (
    <View style={sharedStyles.scrollBody}>
      {
        !sale ? (<Text>Spinner should be here )</Text>) :
          (
            <DetailPage
              source={{uri: getFullImageUrl(sale.imageSrc)}}
              title={sale.title}
              clarificationBlock={
                <EventTime from={parseTime(sale.startDate)} to={parseTime(sale.endDate)} />
              }
              information={sale.description}
            />
          )
      }
    </View>
  );
}));
