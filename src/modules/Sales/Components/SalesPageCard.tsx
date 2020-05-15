import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card } from "../../shared/CardBlock/Card";

interface HomePageCardProps {
  source: {uri: string},
  eventId: string
}

export const SalesPageCard = ({source, eventId}: HomePageCardProps) => {
  const navigation = useNavigation();

  const onPress = () => {
      navigation.navigate('Discount', {
        eventId
      })
  };

  return (
    <Card
      sale={true}
      source={source}
      onPress={onPress}
    />
  );
};
