import React, {ReactElement, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import FooterComponent from "../shared/Footer";
import {sharedStyles} from "../../sharedStyles/styles";
import {CardBlock} from "../shared/CardBlock";
import {Card} from "../shared/CardBlock/Card";
import {SalesPageCardBlock} from "./Components/SalesPageCardBlock";

export const SalesPage = inject('newsStore')(observer(({newsStore}) => {
  useEffect(() => {
    newsStore.getSales();
  }, [newsStore]);

  const {sales} = newsStore;

  return (
    <SafeAreaView style={sharedStyles.scrollBody}>
      <SalesPageCardBlock data={sales} />
    </SafeAreaView>
  );
}));
