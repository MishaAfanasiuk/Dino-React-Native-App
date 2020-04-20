import { observable, configure } from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import { getNews } from "../api";
import { generatorAction } from '../utis/bindDecorator'
configure({enforceActions: 'never'});

class News {
  @observable news = [];
  @observable state = NOT_STARTED;


  getNews = generatorAction(
    function* () {
      this.menuLoadingState = PENDING;
      try {
        const {data} = yield getNews();
        this.menuLoadingState = DONE;
        this.news = data;
      } catch (e) {
        this.menuLoadingState = ERROR;
      }
    }, this);
};

export const newsStore = new News();
