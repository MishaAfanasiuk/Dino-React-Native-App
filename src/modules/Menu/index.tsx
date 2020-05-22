import React, {useEffect} from 'react';
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {MenuItem} from "./Components/MenuItem";

export const MenuPage = inject('menuStore')(observer(({ navigation, menuStore }) => {
  useEffect(() => {
    menuStore.getMenu();
  }, [menuStore]);

  return (
    <View style={sharedStyles.body}>
      {
        Object.keys(menuStore.menu).map((key) => {
          return <MenuItem menuItem={{name: key, items: menuStore.menu[key]}} key={key} />
        })
      }
    </View>
  );
}));
