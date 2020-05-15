import {observable, configure, action} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import { login, register, getUser } from "../api";
import {generatorAction} from "../utis/bindDecorator";
import {invokeErrorModal} from "../utis/invokeErrorModal";
import {hideSpinner, showSpinner} from "./appStore";
import { AsyncStorage } from "react-native";
import {navigate} from "../navigation/rootNavigation";

configure({enforceActions: 'observed'});

interface Login {
  user: any,
}

class Login implements Login {
  @observable user = null;
  @observable state = NOT_STARTED;
  @observable error = '';

  login = generatorAction(function* ({email, password}) {
    showSpinner();
    try {
        const { data: user } = yield login({email, password});
        this.user = user;
        this.setTokenToStorage(user.access_token);
        navigate('UserPage');
      } catch (e) {
        invokeErrorModal(e.toString())
      }
      finally {
        hideSpinner()
      }
    }, this
  );

  register = generatorAction(function *(data) {
    const {password, passwordRepeat} = data;
    if (password !== passwordRepeat) {
      return invokeErrorModal('Password does not match password repeat')
    }

    showSpinner();
    try {
      const { data: user } = yield register(data);
      this.user = user;
      this.setTokenToStorage(user.access_token);
      navigate('UserPage');
    } catch (e) {
      invokeErrorModal('Please, check all fields')
    }
    finally {
      hideSpinner()
    }
  }, this);

  @action
  async setTokenToStorage(token: string) {
    try {
      await AsyncStorage.setItem('token', token)
    } catch (e) {
      invokeErrorModal('Can\'t store token in storage')
    }
  }

  @action.bound
  async logout() {
    try {
      await AsyncStorage.removeItem('token');
      this.user = null;
    } catch (e) {
      invokeErrorModal('Can\'t remove token from storage')
    }
  }

  getUserData = generatorAction(async function *() {
    try {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        return
      }

      const { data: user } = yield getUser(token);
      this.user = user;
    } catch (e) {
      invokeErrorModal(e)
    }
  }, this)
};

export const loginStore = new Login();
