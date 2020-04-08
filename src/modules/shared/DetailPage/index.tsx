import React from 'react';
import {detailStyles} from "./detailsStyle";
import {View, ImageBackground, Image, ScrollView, SafeAreaView} from 'react-native';
import {observer} from 'mobx-react';
import {sharedStyles} from "../../../sharedStyles/styles";
import FooterComponent from "../Footer";
import {CustomText} from "../CustomText";
import {PostTime} from "../PostTimeBlock";

export const DetailPage = (observer(({ navigation, image, title, sale, clarificationBlock, information, postTime}) => {
  return (
    <ScrollView contentContainerStyle={detailStyles.wrapper} bounces={false}>
      <ImageBackground source={image} style={detailStyles.image}>
        {/*<Image style={detailStyles.saleLabel} source={require("../../../assets/images/sale.png")} />*/}
      </ImageBackground>
      <View style={detailStyles.border}>
        <CustomText styles={[sharedStyles.bigTitle]} text={title}/>
      </View>
      {clarificationBlock}
      <View style={detailStyles.informationBlock}>
        <CustomText styles={[sharedStyles.infoText]} text={information}/>
        <PostTime date={postTime}/>
      </View>
    </ScrollView>
  );
}));
