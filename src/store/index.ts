import {observable, configure} from 'mobx';
import login from './login';

configure({ enforceActions: "observed" }); // don't allow state modifications outside actions

class Store {
  // @observable login = login;
  // @observable login = 1;
}

export default new Store();
