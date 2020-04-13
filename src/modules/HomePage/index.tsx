import React, {useEffect} from 'react';
import {homeStyles} from "./styles";
import {SafeAreaView, ScrollView, ScrollViewComponent, View} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {CustomText} from "../shared/CustomText";
import {sharedStyles} from "../../sharedStyles/styles";
import {Card} from "../shared/CardBlock/Card";
import {CardBlock} from "../shared/CardBlock";
import {getFullImageUrl} from "../../utis/getImageUrl";
import {HomePageCardBlock} from "./Components/HomePageCardBlock";
const image = require("../../assets/images/happyHours.jpg")
const dataExmpl = [{image: image}, {image: image}, {image: image}, {image: image}, {image: image}, {image: image}];

export const HomePage = inject('newsStore')(observer(({ navigation, newsStore }) => {
  useEffect(() => {
    newsStore.getNews();
  }, []);
  console.log(newsStore.news[0] && newsStore.news[0].name);
  const { news } = newsStore;
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
    <HomePageCardBlock data={news} />
    <FooterComponent navigation={navigation}/>
    </SafeAreaView>
  );
}));
