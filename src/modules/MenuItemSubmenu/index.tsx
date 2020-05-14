import React from 'react';
import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import {ASSETS_PATH_LINK} from "../../api/http";
import {menuStyles} from "../Menu/styles";

interface MenuItemSubmenuProps {
  name: string,
  items: []
}

export const MenuItemSubmenu = ({ route, navigation }) => {
  const { menuItem } = route.params;
  const { name, items } = menuItem;
  const onItemPress = (item) => {
    navigation.navigate('Dish', { item })
  };
  return (
    <ScrollView contentContainerStyle={sharedStyles.body} bounces={false}>
      <View style={menuStyles.menuItem} >
        <CustomText styles={menuStyles.menuTitle} text={name.charAt(0).toUpperCase() + name.slice(1)} />
        <Image style={menuStyles.menuImage} source={require('../../assets/images/fish.png')}/>
      </View>

      {
        items.map((item) => {
          return (
            <TouchableOpacity key={item._id} style={menuStyles.menuItem} onPress={() => onItemPress(item)}>
              <View style={menuStyles.foodInfo}>
                <CustomText styles={menuStyles.foodTitle} text={item.name.charAt(0).toUpperCase() + item.name.slice(1)} />
                <View style={menuStyles.foodCounts}>
                <CustomText styles={menuStyles.foodCount} text={item.weight+ 'g'} />
                <CustomText styles={menuStyles.foodCount} text={item.price + '$'} />
                </View>
              </View>
              <Image source={{uri: ASSETS_PATH_LINK + item.imageSrc}} style={menuStyles.foodImage} />
            </TouchableOpacity>
          )
        })
      }
    </ScrollView>
  );
};
