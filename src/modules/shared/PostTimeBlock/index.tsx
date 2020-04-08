import React from 'react';
import {View} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CustomText} from "../CustomText";
import {postTimeStyles} from "./postTimeStyles";

export const PostTime = (observer(({ date }) => {
  return (
    <CustomText styles={postTimeStyles.wrapper} text={`Posted on ${date}`}/>
  );
}));
