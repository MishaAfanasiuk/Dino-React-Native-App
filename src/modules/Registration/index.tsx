import React, {useState} from 'react';
import {KeyboardAvoidingView, View} from "react-native";
import {LoginInput} from "../shared/Login/Input";
import {Title} from "../shared/Login/Title";
import {LoginButton} from "../shared/Login/Button";
import {loginStyles} from "../Login/styles";
import {useNavigation} from '@react-navigation/native';
import {inject, observer} from "mobx-react";
import {loginStore} from "../../store/login";

export const RegistrationPage = inject('loginStore')(observer(() => {
  const navigation = useNavigation();

  const onLoginPress = () => {
    navigation.navigate('Login')
  };

  const [state, setState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordRepeat: '',
    phone: ''
  });

  const onFieldChange = (value, fieldName) => {
    setState({...state, [fieldName]: value})
  };

  const onRegister = () => {
    loginStore.register(state)
  };


  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={{width: '90%'}}>
          <Title title={'Registration'}/>
          <LoginInput label={'First name'} onChange={onFieldChange} value={state.firstName} name={'firstName'}/>
          <LoginInput label={'Last name'} onChange={onFieldChange} value={state.lastName} name={'lastName'}/>
          <LoginInput label={'Email'} onChange={onFieldChange} value={state.email} name={'email'}
                      autoComplete={'email'}/>
          <LoginInput label={'Phone'} onChange={onFieldChange} value={state.phone} name={'phone'} autoComplete={'tel'}/>
          <LoginInput
            label={'Password'}
            onChange={onFieldChange}
            value={state.password}
            name={'password'}
            autoComplete={'password'}
          />
          <LoginInput
            label={'Repeat password'}
            onChange={onFieldChange}
            value={state.passwordRepeat}
            name={'passwordRepeat'}
            autoComplete={'password'}
          />

          <View style={loginStyles.buttons}>
            <LoginButton title={'Log in'} onPress={onLoginPress} style={loginStyles.button}/>
            <LoginButton title={'Register'} onPress={onRegister} style={loginStyles.button}/>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}));
