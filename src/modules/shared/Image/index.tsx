import React, {useEffect, useState} from 'react';
import {View, Text, Image, AsyncStorage, ImageBackground} from "react-native";
import base64 from 'base64-js';
import {getFullImage} from "../../../api";
import {invokeErrorModal} from "../../../utis/invokeErrorModal";

function stringToUint8Array(str: string) {
  const length = str.length
  const array = new Uint8Array(new ArrayBuffer(length))
  for(let i = 0; i < length; i++) array[i] = str.charCodeAt(i)
  return array
}

export const CustomImage = ({ source, imageStyle, style }) => {
  const [imageString, setImage] = useState('a');
  const effectHandler = async () => {
    const { uri } = source;
    try {
      const cache = await AsyncStorage.getItem(uri);
      if (cache) {
        return setImage(cache)
      }

      const response = await getFullImage(uri);
      const imageString = `data:image/jpg;base64,` + base64.fromByteArray(new Uint8Array(response.data));
      setImage(imageString);
      await AsyncStorage.setItem(uri, imageString)
    } catch (e) {
      invokeErrorModal(e.toString())
    }
  };

  useEffect(() => {effectHandler()}, []);

  return (
    <ImageBackground source={{uri: imageString}} style={style} imageStyle={imageStyle}/>
  )
}
