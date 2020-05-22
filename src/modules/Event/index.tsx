import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {DetailPage} from "../shared/DetailPage";
import {EventTime} from "../shared/EventTimeBlock";
import {EventStoreInterface} from "../../store/event";
import {getFullImageUrl} from "../../utis/getImageUrl";
import {parseTime} from "../../utis/parseTime";

interface EventPageProps {
  eventStore: EventStoreInterface,
  navigation: any,
  route: any
}

export const EventPage = inject('eventStore')
(observer(({ navigation, eventStore, route }: EventPageProps) => {
  const { eventId } = route.params;

  useEffect(() => {
    eventStore.getEvent(eventId);
  }, [eventId]);

  const { event } = eventStore;

  return (
    <View style={sharedStyles.scrollBody}>
      {
        !event ? (<Text>Spinner should be here )</Text>) :
          (
            <DetailPage
              source={{uri: event.imageSrc}}
              title={event.name}
              clarificationBlock={
                <EventTime from={parseTime(event.startDate)} to={parseTime(event.endDate)} />
              }
              information={event.description}
              postTime={parseTime(event.createdAt)}
            />
          )
      }
    </View>
  );
}));
