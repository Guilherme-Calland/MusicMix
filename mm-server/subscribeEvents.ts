import { Event } from '../common/event';

export class SubscribeEvents {
    events: Event[] = [];
    event: Event;
    subscribeThis(event: Event): Event {
        var result = null;
        if (this.usernameNotSubscribed(event.name)) {
          result = new Event();
          result.copyFrom(event);
          this.events.push(result);
        }
        return result;
      }

}