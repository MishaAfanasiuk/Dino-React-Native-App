import { observable, configure } from "mobx";
import {getDiscount, getEvent} from "../api";
import { generatorAction } from '../utis/bindDecorator'
import { Event } from "../sharedInterfaces/eventsInterfaces";
import {hideSpinner, showSpinner} from "./appStore";
import {invokeErrorModal} from "../utis/invokeErrorModal";
interface Sale {
  _id: string,
  title: string,
  description: string,
  imageSrc: string,
  startDate: string,
  endDate: string,
}
configure({enforceActions: 'never'});

export interface EventStoreInterface {
  event: Event | null,
  getEvent: Function,
  sale: Sale | null,
  getSale: Function,
}

class EventStore implements EventStoreInterface {
  @observable event = null;
  @observable sale = null;

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

  getSale = generatorAction(
    function* (eventId: string) {
      if (this.sale && this.sale._id === eventId) {
        return
      }
      showSpinner();
      try {
        const {data} = yield getDiscount(eventId);
        this.sale = data;
      } catch (e) {
        invokeErrorModal(e)
      }
      finally {
        hideSpinner()
      }
    }, this);
};

export const eventStore = new EventStore();
