import React, {useMemo, useEffect, useState} from 'react';
import {userStyles} from "./styles";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView, Platform,
  TextInput,
  TouchableOpacity, TouchableWithoutFeedback,
  View
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';
import {LoginInput} from "../shared/Login/Input";

export const UserPage = inject('loginStore')(observer(({ navigation, loginStore}) => {
  const user = loginStore.user;
  useEffect(() => {
    if (!loginStore.user)
      navigation.navigate('Login')
  }, [loginStore]);

  const editMode = useMemo(() => loginStore.editMode, [loginStore.editMode]);

  const [state, setState] = useState({email: user ? user.email : '', phone: user ? user.phone : ''});
  const handleEmailChange = (email) => {
    setState({...state, email})
  };
  const handlePhoneChange = (phone) => {
    setState({...state, phone})
  };
  return (
    <View style={sharedStyles.body}>
      <ImageBackground style={userStyles.userpick} source={require('../../assets/images/account.png')}>
        <TouchableOpacity style={userStyles.editIconWrap} onPress={loginStore.changingEditMode}>
          <Image style={userStyles.editIcon} source={require('../../assets/images/edit.png')}/>
        </TouchableOpacity>
      </ImageBackground>
      {(!editMode && <>
            <CustomText styles={sharedStyles.title} text={user ? `${user.firstName} ${user.lastName}` : ''} />
            <CustomText styles={sharedStyles.infoText} text={user ? `${user._id}`: ''} />
            <View style={userStyles.coinBlock}>
              <Image style={userStyles.countImg} source={require('../../assets/images/price-tag.png')}/>
              <CustomText text={user ? `${user.coins} coins` : ''} styles={sharedStyles.title} />
            </View>
            </>
      )}

      {(editMode ?
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={userStyles.userInfoBlock}>
              <CustomText styles={userStyles.userInfoTitle} text={'email'}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={{ height: 40, fontSize: 25}}
                value={state.email}
                onChangeText={handleEmailChange}
              />
            </TouchableWithoutFeedback></View>
            <View style={userStyles.userInfoBlock}>
              <CustomText styles={userStyles.userInfoTitle} text={'phone'}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={{ height: 40, fontSize: 25}}
                value={state.phone}
                onChangeText={handlePhoneChange}
              />
            </TouchableWithoutFeedback></View>
            <View style={userStyles.buttonBlock}>
              <TouchableOpacity style={[userStyles.button, userStyles.red]} onPress={loginStore.changingEditMode}>
                <CustomText styles={userStyles.buttonText} text={'Cancel'}/>
              </TouchableOpacity>
              <TouchableOpacity style={[userStyles.button, userStyles.green]} onPress={() => loginStore.editUser(state)}>
                <CustomText styles={userStyles.buttonText} text={'Save'}/>
              </TouchableOpacity>
            </View>
            <View style={userStyles.buttonBlock}>
            <TouchableOpacity style={[userStyles.button, userStyles.logout]} onPress={loginStore.logout}>
              <CustomText styles={userStyles.buttonText} text={'Log out'}/>
            </TouchableOpacity></View>
          </KeyboardAvoidingView>
          :
        <View>
          <View style={userStyles.userInfoBlock}>
            <CustomText styles={userStyles.userInfoTitle} text={'email'}/>
            <CustomText styles={userStyles.userInfoValue} text={user ? user.email : ''}/>
          </View>
          <View style={userStyles.userInfoBlock}>
          <CustomText styles={userStyles.userInfoTitle} text={'phone'}/>
          <CustomText styles={userStyles.userInfoValue} text={user ? user.phone : ''}/>
          </View>
          <TouchableOpacity style={userStyles.userCard} onPress={loginStore.displayingCard}>
            <CustomText styles={userStyles.userCardTitle} text={'Your card'}/>
            <Image style={userStyles.userCardQR} source={require('../../assets/images/qrEx.png')}/>
          </TouchableOpacity>
        </View>
      )}
      <Dialog
        visible={loginStore.displayCard}
        onTouchOutside={() => {loginStore.displayingCard()}}
        dialogAnimation={new SlideAnimation({
          slideFrom: 'bottom',
        })}
      >
        <DialogContent>
          <CustomText styles={userStyles.userCardTitle} text={'Your card'}/>
        <Image style={userStyles.userCardQR} source={require('../../assets/images/qrEx.png')}/>
          <CustomText styles={userStyles.userCardTitle} text={user ? user._id : ''}/>
        </DialogContent>
      </Dialog>
    </View>
  );
}));
