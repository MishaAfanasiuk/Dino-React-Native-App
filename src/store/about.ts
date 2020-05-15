import {observable, configure, action} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {getDiscounts, getMenu} from "../api";
import { generatorAction } from '../utis/bindDecorator'
configure({enforceActions: 'never'});

class About {
  @observable displayContacts = false;
  @observable displayMap = false;


  @action displayingContacts = () => {
      this.displayContacts = !this.displayContacts;
    };
  @action displayingMap = () => {
    this.displayMap = !this.displayMap;
  }
};

export const aboutStore = new About();
