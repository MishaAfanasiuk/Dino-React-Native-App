import {observable, configure, action} from "mobx";

configure({enforceActions: 'never'});

export interface EventStoreInterface {
  isLoading: boolean,
  setLoadingState: Function
}

class AppStore implements EventStoreInterface {
  @observable isLoading = false;

  @action.bound
  setLoadingState(state: boolean) {
    this.isLoading = state;
  }
}

export const appStore = new AppStore();
export const showSpinner = () => {
  appStore.setLoadingState(true)
};
export const hideSpinner = () => {
  appStore.setLoadingState(false)
};
