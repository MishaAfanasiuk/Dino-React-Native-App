import React, {useMemo, useEffect} from 'react';
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

export const UserPage = inject('loginStore')(observer(({ navigation, loginStore}) => {
  const user = loginStore.user;
  useEffect(() => {
    if (!loginStore.user)
      navigation.navigate('Login')
  }, [loginStore]);

  const editMode = useMemo(() => loginStore.editMode, [loginStore.editMode]);
  const [emailValue, onChangeEmail] = React.useState('user.email');
  const [phoneValue, onChangePhone] = React.useState(user.phone);
  return (
    <View style={sharedStyles.body}>
      <ImageBackground style={userStyles.userpick} source={require('../../assets/images/account.png')}>
        <TouchableOpacity style={userStyles.editIconWrap} onPress={loginStore.changingEditMode}>
          <Image style={userStyles.editIcon} source={require('../../assets/images/edit.png')}/>
        </TouchableOpacity>
      </ImageBackground>
      {(!editMode && <>
            <CustomText styles={sharedStyles.title} text={`${user.firstName} ${user.lastName}`} />
            <CustomText styles={sharedStyles.infoText} text={`${user._id}`} />
            <View style={userStyles.coinBlock}>
              <Image style={userStyles.countImg} source={require('../../assets/images/price-tag.png')}/>
              <CustomText text={`${user.coins} coins`} styles={sharedStyles.title} />
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
                value={emailValue}
                onChangeText={text => onChangeEmail(text)}
              />
            </TouchableWithoutFeedback></View>
            <View style={userStyles.userInfoBlock}>
              <CustomText styles={userStyles.userInfoTitle} text={'phone'}/>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <TextInput
                style={{ height: 40, fontSize: 25}}
                value={phoneValue}
                onChangeText={text => onChangePhone(text)}
              />
            </TouchableWithoutFeedback></View>
          </KeyboardAvoidingView>
          :
        <View>
          <View style={userStyles.userInfoBlock}>
            <CustomText styles={userStyles.userInfoTitle} text={'email'}/>
            <CustomText styles={userStyles.userInfoValue} text={user.email}/>
          </View>
          <View style={userStyles.userInfoBlock}>
          <CustomText styles={userStyles.userInfoTitle} text={'phone'}/>
          <CustomText styles={userStyles.userInfoValue} text={user.phone}/>
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
          <CustomText styles={userStyles.userCardTitle} text={user._id}/>
        </DialogContent>
      </Dialog>
    </View>
  );
}));
