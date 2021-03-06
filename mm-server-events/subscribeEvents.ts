import { Event } from '../common/event';

export class SubscribeEvents {
  //um array de todos os musicos cadastrados
  events: Event[] = [];
  //o musico que estamos entrando na sua conta
  event: Event;

  subscribeThis(event: Event): Event {
    var result = null;
    if (this.nameNotSubscribed(event.name)) {
      result = new Event();
      result.copyFrom(event);
      this.events.push(result);
    }
    return result;
  }

  returnSubbedEvent(event: Event): Event {
    var subbedEvent = this.getSubbedEvent(event.name);
    this.event = subbedEvent;
    return subbedEvent;
  }

  nameNotSubscribed(name: String): boolean {
    return !this.events.find(a => a.name == name);
  }

  getSubbedEvent(name: String): Event {
    return this.events.find(a => a.name == name);
  }

  update(event: Event): Event {
    var result: Event = this.events.find(a => a.name == event.name);
    if (result) result.copyFrom(event);
    return result;
  }

  getEvents(): Event[] {
    return this.events;
  }

  getEvent() : Event {
    return this.event;
  }
}

