import React, {ReactElement, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
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
