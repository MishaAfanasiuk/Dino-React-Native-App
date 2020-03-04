import {action, observable, configure, runInAction} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {getMenu} from "../api";
configure({enforceActions: 'observed'});

class Menu {
  @observable menu = [false];
  @observable public state = NOT_STARTED;

  @action
  getMenu = async () => {
    this.state = PENDING;
    try {
      const { data } = await getMenu();
      runInAction(() => {
        this.state = DONE;
        this.menu = data;
      })
    } catch (e) {
      runInAction(() => {
        this.state = ERROR;
      })
    }
  }
};

export default new Menu();
