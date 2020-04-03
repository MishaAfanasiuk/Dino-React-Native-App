import React from 'react';
import {detailStyles} from "./detailsStyle";
import {View, ImageBackground, Image, ScrollView, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {sharedStyles} from "../../../sharedStyles/styles";
import FooterComponent from "../Footer";
import {CustomText} from "../CustomText";

export const DetailPage = (observer(({ navigation, image, title, sale, }) => {
  return (
    // <ScrollView >
    <View style={detailStyles.wrapper}>
      <ImageBackground source={image} style={detailStyles.image}>
        {/*<Image style={detailStyles.saleLabel} source={require("../../../assets/images/sale.png")} />*/}
      </ImageBackground>
      <CustomText styles={sharedStyles.bigTitle} text={title}/>
    </View>
    // </ScrollView>
  );
}));
