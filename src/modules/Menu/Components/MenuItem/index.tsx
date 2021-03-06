import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {Image, TouchableOpacity} from "react-native";
import {CustomText} from "../../../shared/CustomText";
import {menuStyles} from "../../styles";

interface MenuItemProps {
  menuItem: {
    name: string,
    items: any[]
  }
}

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  const navigation = useNavigation();
  const findUrl = () => {
    if(menuItem.name === 'salad') {
      return require("../../../../assets/images/salad.png");
    } else if(menuItem.name === 'desert') {
      return require("../../../../assets/images/desert.png");
    } else if(menuItem.name === 'soup') {
      return require("../../../../assets/images/soup.png");
    }
  };

  const onItemPress = () => {
    navigation.navigate('MenuItemSubmenu', { menuItem })
  };
  return (
    <TouchableOpacity style={menuStyles.menuItem} onPress={onItemPress}>
      <CustomText styles={menuStyles.menuTitle} text={menuItem.name.charAt(0).toUpperCase() + menuItem.name.slice(1)} />
      <Image style={menuStyles.menuImage} source={findUrl()}/>
    </TouchableOpacity>
  )
};
