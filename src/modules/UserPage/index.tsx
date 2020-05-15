import React, {useMemo, useState} from 'react';
import {userStyles} from "./styles";
import {
  Button,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView, Platform, ScrollView,
  TextInput,
  TouchableOpacity, TouchableWithoutFeedback,
  View
} from 'react-native';
import {inject, observer} from 'mobx-react';
import {sharedStyles} from "../../sharedStyles/styles";
import {CustomText} from "../shared/CustomText";
import Dialog, { DialogContent, SlideAnimation } from 'react-native-popup-dialog';
import {aboutStyles} from "../About/aboutStyles";
const user = {
  "_id": "11111111111",
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@mail.com",
  "phone": "+389597567467",
  "coins": 25
}

export const UserPage = inject('login')(observer(({ navigation, login}) => {
  const editMode = useMemo(() => login.editMode, [login.editMode]);
  const [emailValue, onChangeEmail] = React.useState('user.email');
  const [phoneValue, onChangePhone] = React.useState(user.phone);
  return (
    <View style={sharedStyles.body}>
      <ImageBackground style={userStyles.userpick} source={require('../../assets/images/account.png')}>
        <TouchableOpacity style={userStyles.editIconWrap} onPress={login.changingEditMode}>
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
            <View style={userStyles.buttonBlock}>
              <TouchableOpacity style={[userStyles.button, userStyles.red]}>
                <CustomText styles={userStyles.buttonText} text={'Cancel'}/>
              </TouchableOpacity>
              <TouchableOpacity style={[userStyles.button, userStyles.green]}>
                <CustomText styles={userStyles.buttonText} text={'Save'}/>
              </TouchableOpacity>
            </View>
            <View style={userStyles.buttonBlock}>
            <TouchableOpacity style={[userStyles.button, userStyles.logout]}>
              <CustomText styles={userStyles.buttonText} text={'Log out'}/>
            </TouchableOpacity></View>
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
          <TouchableOpacity style={userStyles.userCard} onPress={login.displayingCard}>
            <CustomText styles={userStyles.userCardTitle} text={'Your card'}/>
            <Image style={userStyles.userCardQR} source={require('../../assets/images/qrEx.png')}/>
          </TouchableOpacity>
        </View>
      )}
      <Dialog
        visible={login.displayCard}
        onTouchOutside={() => {login.displayingCard()}}
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
