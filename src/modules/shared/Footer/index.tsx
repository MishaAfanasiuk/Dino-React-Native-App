import React from "react";
import {Image, Text, View, Button, TouchableOpacity} from "react-native";
import {styles} from "./footerStyles";


export const FooterComponent = ({navigation})=>{

  return (
    <View style={styles.footer}>
      {/*<Image style={styles.icon} source={require('../../../assets/images/news(1).png')}/>*/}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Image style={styles.icon} source={require('../../../assets/images/news(1).png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("About")}>
        <Image style={styles.icon} source={require('../../../assets/images/info.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Sales")}>
        <Image style={styles.icon} source={require('../../../assets/images/sales.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Menu")}>
        <Image style={styles.icon} source={require('../../../assets/images/wine-menu.png')}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("UserPage")}>
        <Image style={styles.icon} source={require('../../../assets/images/account.png')}/>
      </TouchableOpacity>
    </View>
  );
};

export default FooterComponent;
