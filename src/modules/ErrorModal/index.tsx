import React from 'react';
import { View, Modal } from "react-native";
import {inject, observer} from "mobx-react";

export const ErrorModal = inject('eventStore')(observer(() => {
  return (
    <View>
      Alert
    </View>
  )
}))
