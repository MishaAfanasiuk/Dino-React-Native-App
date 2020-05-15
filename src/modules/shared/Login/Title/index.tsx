import React from 'react';
import {View, Text} from "react-native";
import {loginTitleStyles} from "./styles";

interface TitleProps {
  title: string
}

export const Title = ({ title }: TitleProps) => {
 return (
   <View style={loginTitleStyles.wrapper}>
     <Text style={loginTitleStyles.text}>{title}</Text>
   </View>
 )
};
