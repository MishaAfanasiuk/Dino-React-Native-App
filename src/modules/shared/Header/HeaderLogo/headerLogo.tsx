import {styles} from "../styles";
import {Image, Text, View} from "react-native";
import React from "react";

export const HeaderLogo = () => {
  return (
      <Image style={styles.logo} source={require('../../../../assets/images/dino.jpg')}/>
  )};
