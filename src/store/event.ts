import { observable, configure } from "mobx";
import {DONE, NOT_STARTED, PENDING, ERROR, RequestStatuses} from "../constants/requestStatuses";
import { getEvent } from "../api";
import { generatorAction } from '../utis/bindDecorator'
import { Event } from "../sharedInterfaces/eventsInterfaces";

configure({enforceActions: 'never'});

export interface EventStoreInterface {
  event: Event | null,
  getEvent: Function,
  state: RequestStatuses
}

class EventStore implements EventStoreInterface {
  @observable event = null;
  @observable state: RequestStatuses = NOT_STARTED;

  getEvent = generatorAction(
    function* (eventId: string) {
      if (this.event && this.event._id === eventId) {
        return
      }
      this.state = PENDING;
      try {
        const {data} = yield getEvent(eventId);
        this.state = DONE;
        this.event = data;
      } catch (e) {
        this.state = ERROR;
      }
    }, this);
};

export const eventStore = new EventStore();
