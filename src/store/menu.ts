import {observable, configure, action} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {getDiscounts, getMenu, getFullImage } from "../api";
import { generatorAction } from '../utis/bindDecorator'
import {hideSpinner, showSpinner} from "./appStore";
import {invokeErrorModal} from "../utis/invokeErrorModal";
import {AsyncStorage} from "react-native";
import {getFullImageUrl} from "../utis/getImageUrl";
configure({enforceActions: 'never'});

class Menu {
  @observable menu = [];
  @observable discounts = [];
  @observable menuTime = 0;


  getMenu = generatorAction(
    async function* () {
      showSpinner();
      try {
        let pos_menu = await AsyncStorage.getItem('menu');
        let menuTime = parseInt(await AsyncStorage.getItem('menuTime'));
        const currTime = new Date().valueOf();
        if(!pos_menu || (currTime - menuTime >= 10000000) || !menuTime){
          if(pos_menu) {
            await AsyncStorage.removeItem('menu')
          }
          const {data} = yield getMenu();
          this.menu = data;
          this.setTimeToStorage(currTime.toString());
          this.setMenuToStorage(JSON.stringify(data));
        }
        else {
          this.menu = JSON.parse(await AsyncStorage.getItem('menu'));
        }
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this);
  @action
  async setMenuToStorage(menu) {
    try {
      await AsyncStorage.setItem('menu', menu)
    } catch (e) {
      invokeErrorModal(e)
    }
  }
  async setImageToStorage(name, image) {
    try {
      await AsyncStorage.setItem(name, image)
    } catch (e) {
      invokeErrorModal(e)
    }
  }

  @action
  async setTimeToStorage(name, time) {
    try {
      await AsyncStorage.setItem(name, time)
    } catch (e) {
      invokeErrorModal('Can\'t store menu in storage')
    }
  }

  getDiscounts = generatorAction(
    function* () {
      showSpinner();
      try {
        const { data } = yield getDiscounts();
        this.discounts = data;
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this)

  getFullImageWithCache = generatorAction(
    async function* (url) {
      showSpinner();
      try {
        console.log(url)
        let pos_image = await AsyncStorage.getItem(url);
        let imgTime = parseInt(await AsyncStorage.getItem('imgTime'));
        const currTime = new Date().valueOf();
        if(!pos_image || (currTime - imgTime >= 10000000) || !imgTime){
          if(pos_image) {
            await AsyncStorage.removeItem(url)
          }
          const {data} = yield getFullImage(url);
          console.log(data)
          this.setTimeToStorage('imgTime', currTime.toString());
          this.setImageToStorage(url, JSON.stringify(data));
        }
        else {
          this[url] = JSON.parse(await AsyncStorage.getItem(url));
          console.log(this.url)
        }
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this)
};

export const menuStore = new Menu();
