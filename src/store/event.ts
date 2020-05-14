import { observable, configure } from "mobx";
import { getEvent } from "../api";
import { generatorAction } from '../utis/bindDecorator'
import { Event } from "../sharedInterfaces/eventsInterfaces";
import {hideSpinner, showSpinner} from "./appStore";
import {invokeErrorModal} from "../utis/invokeErrorModal";

configure({enforceActions: 'never'});

export interface EventStoreInterface {
  event: Event | null,
  getEvent: Function,
}

class EventStore implements EventStoreInterface {
  @observable event = null;

  getEvent = generatorAction(
    function* (eventId: string) {
      if (this.event && this.event._id === eventId) {
        return
      }
      showSpinner();
      try {
        const {data} = yield getEvent(eventId);
        this.event = data;
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this);
};

export const eventStore = new EventStore();
