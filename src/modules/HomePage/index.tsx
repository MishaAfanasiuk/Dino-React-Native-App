import React, {useEffect} from 'react';
import {homeStyles} from "./styles";
import {SafeAreaView, ScrollView, ScrollViewComponent, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles";
import {Card} from "../shared/Card";
import {getFullImageUrl} from "../../utis/getImageUrl";
const image = require("../../assets/images/happyHours.jpg")

export const HomePage = inject('newsStore')(observer(({ navigation, newsStore }) => {
  useEffect(() => {
    newsStore.getNews();
  }, []);
  console.log(newsStore.news[0] && newsStore.news[0].name);
  const { news } = newsStore;
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <ScrollView contentContainerStyle={homeStyles.wrapper}>
        {
          news.map((item, i) => (
            <Card source={{uri: getFullImageUrl(item.imageSrc)}} lastOne={i === news.length} key={item._id} />
          ))
        }
      </ScrollView>
    <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
