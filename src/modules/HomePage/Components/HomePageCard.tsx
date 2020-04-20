import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from "../../shared/CardBlock/Card";

interface HomePageCardProps {
  source: {uri: string},
  isEvent: boolean,
  eventId: string
}

export const HomePageCard = ({source, isEvent, eventId}: HomePageCardProps) => {
  const navigation = useNavigation();

  const onPress = () => {
    if (isEvent) {
      navigation.navigate('Event', {
        eventId
      })
    }
  };

  return (
    <Card
      sale={false}
      source={source}
      onPress={onPress}
    />
  );
};
