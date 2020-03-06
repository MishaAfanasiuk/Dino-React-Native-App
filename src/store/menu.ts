import { observable, configure } from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {getDiscounts, getMenu} from "../api";
import { generatorAction } from '../utis/bindDecorator'
configure({enforceActions: 'never'});

class Menu {
  @observable menu = [];
  @observable discounts = [];
  @observable menuLoadingState = NOT_STARTED;
  @observable discountsLoadingState = NOT_STARTED;


  getMenu = generatorAction(
    function* () {
      this.menuLoadingState = PENDING;
      try {
        const {data} = yield getMenu();
        this.menuLoadingState = DONE;
        this.menu = data;
      } catch (e) {
        this.menuLoadingState = ERROR;
      }
    }, this);

  getDiscounts = generatorAction(
    function* () {
      this.menuLoadingState = PENDING;
      try {
        const { data } = yield getDiscounts();
        this.menuLoadingState = DONE;
        this.discounts = data;
      } catch (e) {
        this.menuLoadingState = ERROR;
      }
    }, this)
};

export const menuStore = new Menu();
