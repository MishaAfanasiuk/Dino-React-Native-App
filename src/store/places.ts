import { observable, configure } from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import { getPlaces } from "../api";
import { generatorAction } from '../utis/bindDecorator'
configure({enforceActions: 'never'});

class Places {
  @observable places = [];
  @observable state = NOT_STARTED;


  getLocations = generatorAction(
    function* () {
      this.menuLoadingState = PENDING;
      try {
        const {data} = yield getPlaces();
        this.menuLoadingState = DONE;
        this.menu = data;
      } catch (e) {
        this.menuLoadingState = ERROR;
      }
    }, this);
};

export const placesStore = new Places();
