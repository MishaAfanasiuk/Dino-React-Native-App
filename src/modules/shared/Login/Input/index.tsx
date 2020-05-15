import React from 'react';
import {View, Text, TextInput, TextInputAndroidProps} from "react-native";
import {loginInputStyles} from "./styles";

interface LoginInput {
  label: string,
  value: string,
  onChange: (text: string, name: string) => void,
  name?: string,
  autoComplete?: TextInputAndroidProps['autoCompleteType'],
}


export const LoginInput = ({label, onChange, value, name, autoComplete = 'off'}: LoginInput) => {
  const onChangeText = (text) => {
    onChange(text, name)
  };

  return (
    <View>
      <Text style={loginInputStyles.label}>{label}</Text>
      <TextInput style={loginInputStyles.input} value={value} onChangeText={onChangeText} autoCompleteType={autoComplete} />
    </View>
  )
};
