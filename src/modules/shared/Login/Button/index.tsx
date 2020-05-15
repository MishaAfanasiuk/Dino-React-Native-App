import React from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import {loginButtonStyles} from "./styles";

interface ButtonProps {
  title: string,
  onPress: () => void,
  style?: any
}

export const LoginButton = ({title, onPress, style = {}}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <View style={[loginButtonStyles.button]}>
        <Text style={loginButtonStyles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  )
};
