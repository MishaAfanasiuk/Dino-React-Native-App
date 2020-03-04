import {action, observable, flow, configure, runInAction} from "mobx";
import {DONE, ERROR, NOT_STARTED, PENDING} from "../constants/requestStatuses";
import {login, register} from "../api";
configure({enforceActions: 'observed'});

class Login {
  @observable user = {};
  @observable state = NOT_STARTED;
  @observable error = '';

  @action
  login = async ({ username, password }) => {
    this.state = PENDING;
    try {
      const user = await login({ username, password });
      runInAction(() => {
        this.state = DONE;
        this.user = user;
      })
    } catch (e) {
      runInAction(() => {
        this.state = ERROR;
      })
    }
  };

  @action
  register = async ({ username, password, passwordRepeat }) => {
    if (password !== passwordRepeat) {
      this.state = ERROR;
      this.error = 'Passwords miss match';
      return
    }

    this.state = PENDING;
    try {
      const user = await register({ username, password, passwordRepeat });
      runInAction(() => {
        this.state = DONE;
        this.user = user;
      })
    } catch (e) {
      runInAction(() => {
        this.state = ERROR;
      })
    }
  }

  @action
  getUserData = async () => {
    this.state = PENDING;
    try {
      const user = await getUser();
    } catch (e) {
      runInAction(() => {
        this.state = ERROR;
      })
    }
  }
};

export default new Login();
