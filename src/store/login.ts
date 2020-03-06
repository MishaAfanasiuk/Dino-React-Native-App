import {observable, configure} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import { login, register, getUser } from "../api";
import {generatorAction} from "../utis/bindDecorator";

configure({enforceActions: 'observed'});

class Login {
  @observable user = {};
  @observable state = NOT_STARTED;
  @observable error = '';

  login = generatorAction(function* ({username, password}) {
      this.state = PENDING;
      try {
        const { data: user } = yield login({username, password});
        this.state = DONE;
        this.user = user;
      } catch (e) {
        this.state = ERROR;
      }
    }, this
  );

  register = generatorAction(function *({username, password, passwordRepeat}) {
    if (password !== passwordRepeat) {
      this.state = ERROR;
      this.error = 'Passwords miss match';
      return
    }

    this.state = PENDING;
    try {
      const { data: user } = yield register({username, password, passwordRepeat});
      this.state = DONE;
      this.user = user;
    } catch (e) {
      this.state = ERROR;
    }
  }, this);

  getUserData = generatorAction(function *() {
    this.state = PENDING;
    try {
      const { data: user } = yield getUser();
      this.state = DONE;
      this.user = user;
    } catch (e) {
      this.state = ERROR;
    }
  }, this)
};

export const loginStore = new Login();
