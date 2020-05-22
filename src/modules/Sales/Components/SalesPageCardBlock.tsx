import React, {ReactElement, useEffect, useState} from 'react';
import { CardBlock } from "../../shared/CardBlock";
import {SalesPageCard} from "./SalesPageCard";
import {getFullImageUrl} from "../../../utis/getImageUrl";
interface Sales {
  _id: string,
  title: string,
  description: string,
  imageSrc: string,
  posterImageSrc: string,
  startDate: string,
  endDate: string,
}


interface HomePageCardBlockProps {
  data: [Sales]
}

export const SalesPageCardBlock = ({ data }: HomePageCardBlockProps) => {
  const [cardBlockElements, updateCardBlockElements]: [ReactElement[], Function] = useState([]);

  useEffect(() => {
    updateCardBlockElements(data.map((item) => (
      <SalesPageCard
        source={{uri: item.posterImageSrc, cache: 'force-cache'}}
        eventId={item._id}
        key={item._id}
      />
    )))
  }, [data]);

  return (
    <CardBlock data={cardBlockElements}/>
  );
};
