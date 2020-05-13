import React from 'react';
import { View, Image } from 'react-native';
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import {ASSETS_PATH_LINK} from "../../api/http";

interface MenuItemSubmenuProps {
  name: string,
  items: []
}

export const MenuItemSubmenu = ({ route, navigation }) => {
  const { menuItem } = route.params;
  const { name, items } = menuItem;

  return (
    <View style={sharedStyles.body}>
      <CustomText text={name} />

      {
        items.map((item) => {
          return (
            <View key={item._id}>
              <CustomText text={item.name} />
              <Image source={{uri: ASSETS_PATH_LINK + item.imageSrc}} style={{height: 100, width: 100}} />
            </View>
          )
        })
      }
    </View>
  );
};
