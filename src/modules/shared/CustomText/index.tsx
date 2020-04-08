import React from 'react';
import {Text} from 'react-native';
import {inject, observer} from 'mobx-react';
import {textStyles} from "./textStyles"

export const CustomText = inject('menu')(observer(({ navigation, text, onPress, styles}) =>
  <Text style={[textStyles.text, styles]} onPress={onPress}>{text}</Text>));
