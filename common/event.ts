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

  copyFrom(from:Event){
    this.name=from.name;
    this.date=from.date;
    this.bands=from.bands;
  }
}