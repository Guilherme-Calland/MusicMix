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
}