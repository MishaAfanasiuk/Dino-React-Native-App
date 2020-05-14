import React, {ReactElement} from 'react';
import {detailStyles} from "./detailsStyle";
import {View, ImageBackground, Image, ScrollView} from 'react-native';
import {sharedStyles} from "../../../sharedStyles/styles";
import {CustomText} from "../CustomText";
import {PostTime} from "../PostTimeBlock";

interface DetailPageProps {
  source: {uri: string},
  title: string,
  sale?: boolean,
  clarificationBlock: ReactElement,
  information: string,
  postTime?: string
}

export const DetailPage = ({ source, title, sale, clarificationBlock, information, postTime }: DetailPageProps) => {
  return (
    <ScrollView contentContainerStyle={detailStyles.wrapper} bounces={false}>
      <ImageBackground source={source} style={detailStyles.image}>
        {sale && <Image style={detailStyles.saleLabel} source={require("../../../assets/images/sale.png")} />}
      </ImageBackground>
      <View style={detailStyles.border}>
        <CustomText styles={[sharedStyles.bigTitle]} text={title}/>
      </View>
      {clarificationBlock}
      <View style={detailStyles.informationBlock}>
        <CustomText styles={[sharedStyles.infoText]} text={information}/>
        {(postTime && <PostTime date={postTime}/>)}
      </View>
    </ScrollView>
  );
};
