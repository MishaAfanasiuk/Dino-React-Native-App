import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {HomePageCardBlock} from "./Components/HomePageCardBlock";

export const HomePage = inject('newsStore')(observer(({newsStore}) => {
  useEffect(() => {
    newsStore.getNews();
  }, [newsStore]);

  const {news} = newsStore;
  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <HomePageCardBlock data={news}/>
    </SafeAreaView>
  );
}));
