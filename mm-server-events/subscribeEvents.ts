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

  returnSubbedUser(event: Event): Event {
    /*var subbedEvent = this.getSubbedEvent(event.name);
    if(subbedEvent){
      if(this.wrongPassword(event.password, subbedEvent.password)){
        subbedEvent = null;
      }
    }
    this.event = subbedEvent;
    return subbedEvent;*/
    return null;
  }

  nameNotSubscribed(name: String): boolean {
    return !this.events.find(a => a.name == name);
  }

  getSubbedEvent(name: String): Event {
    return this.events.find(a => a.name == name);
  }

  wrongPassword(password1: String, password2: String): boolean{
    return (password1 != password2);
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

