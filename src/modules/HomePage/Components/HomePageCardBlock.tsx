import React, {ReactElement, useEffect, useState} from 'react';
import { CardBlock } from "../../shared/CardBlock";
import {HomePageCard} from "./HomePageCard";
import {getFullImageUrl} from "../../../utis/getImageUrl";
import {News} from "../../../sharedInterfaces/newsInterfaces";

interface HomePageCardBlockProps {
  data: [News]
}

export const HomePageCardBlock = ({ data }: HomePageCardBlockProps) => {
  const [cardBlockElements, updateCardBlockElements]: [ReactElement[], Function] = useState([]);

  useEffect(() => {
    updateCardBlockElements(data.map((item) => (
      <HomePageCard
        source={{uri: item.imageSrc}}
        eventId={item.eventId}
        isEvent={item.type === 'event'}
        key={item._id}
      />
    )))
  }, [data]);

  return (
    <CardBlock data={cardBlockElements}/>
  );
};
