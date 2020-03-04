import React from 'react';
import {homeStyles} from "./styles";
import {Text, View} from 'react-native';
import {inject, observer} from 'mobx-react';

export const HomePage = inject('menu')(observer(({ menu }) => {
  return (
    <View style={homeStyles.container}>
      <Text onPress={menu.getMenu}>
        {menu.state}
        {menu.menu.map((i) => i.name)}
      </Text>
    </View>
  );
}));
