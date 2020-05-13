import React from "react";
import { useNavigation } from '@react-navigation/native';
import {Image, View, TouchableOpacity } from "react-native";
import {styles} from "./footerStyles";

interface FooterComponentProps {
  navigate: Function
}

export const FooterComponent = ({ navigate }: FooterComponentProps) => {

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigate("Home")}>
        <Image style={styles.icon} source={require('../../../assets/images/news(1).png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("About")}>
        <Image style={styles.icon} source={require('../../../assets/images/info.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Sales")}>
        <Image style={styles.icon} source={require('../../../assets/images/sales.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("Menu")}>
        <Image style={styles.icon} source={require('../../../assets/images/wine-menu.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate("UserPage")}>
        <Image style={styles.icon} source={require('../../../assets/images/account.png')}/>
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;
