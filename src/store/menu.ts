import { observable, configure } from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {getDiscounts, getMenu} from "../api";
import { generatorAction } from '../utis/bindDecorator'
import {hideSpinner, showSpinner} from "./appStore";
import {invokeErrorModal} from "../utis/invokeErrorModal";
configure({enforceActions: 'never'});

class Menu {
  @observable menu = [];
  @observable discounts = [];


  getMenu = generatorAction(
    function* () {
      showSpinner();
      try {
        const {data} = yield getMenu();
        this.menu = data;
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this);

  getDiscounts = generatorAction(
    function* () {
      showSpinner()
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
};

export const menuStore = new Menu();
