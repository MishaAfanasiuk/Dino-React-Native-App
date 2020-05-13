import React from 'react'
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from "react-native";
import {CustomText} from "../../../shared/CustomText";

interface MenuItemProps {
  menuItem: {
    name: string,
    items: any[]
  }
}

export const MenuItem = ({ menuItem }: MenuItemProps) => {
  const navigation = useNavigation();

  const onItemPress = () => {
    navigation.navigate('MenuItemSubmenu', { menuItem })
  };

  return (
    <TouchableOpacity onPress={onItemPress}>
      <CustomText text={menuItem.name} />
    </TouchableOpacity>
  )
};
