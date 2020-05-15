import React, {useState} from 'react';
import {View} from "react-native";
import {LoginInput} from "../shared/Login/Input";
import {Title} from "../shared/Login/Title";
import {LoginButton} from "../shared/Login/Button";
import {loginStyles} from "./styles";
import { useNavigation } from '@react-navigation/native';
import {observer} from "mobx-react";
import {inject} from "mobx-react";

export const LoginPage = inject('loginStore')(observer(({ loginStore }) => {
  const navigation = useNavigation();
  const [state, setState] = useState({email: '', password: ''});
  const handleLoginChange = (email) => {
    setState({...state, email})
  };
  const handlePasswordChange = (password) => {
    setState({...state, password})
  };

  const onRegisterPress = () => {
    navigation.navigate('Register')
  };

  const onLoginPress = () => {
    loginStore.login(state);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{width: '90%'}}>
        <Title title={'Login'} />
        <LoginInput value={state.email} onChange={handleLoginChange} label={'email'}/>
        <LoginInput value={state.password} onChange={handlePasswordChange} label={'password'}/>

        <View style={loginStyles.buttons}>
          <LoginButton title={'Register'} onPress={onRegisterPress} style={loginStyles.button} />
          <LoginButton title={'Log in'} onPress={onLoginPress} style={loginStyles.button} />
        </View>
      </View>
    </View>
  )
}));
