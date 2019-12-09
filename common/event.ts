export class Event {
    name: String;
    date: String;
    bands: String;
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.name = "";
      this.date= "";
      this.bands = "";
    }
  
    clone(): Event {
      var event: Event = new Event();
      event.copyFrom(this);
      return event;
    }
  
    copyFrom(from: Event): void {
      this.name = from.name;
      this.date = from.date;
      this.bands = from.bands;
    }
    
}