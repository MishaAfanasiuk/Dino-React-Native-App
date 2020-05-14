import React from 'react';
import {Text} from 'react-native';
import {textStyles} from "./textStyles"

interface CustomTextProps {
  text: string,
  styles?: object
}

export const CustomText = ({text, styles}: CustomTextProps) => (
  <Text style={[textStyles.text, styles]}>
    {text}
  </Text>
);
