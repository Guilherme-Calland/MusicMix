import {Musician} from './musician';

export class Band{
  public name: String;

  constructor() {
    this.clean();
  }
  
  clean(): void {
    this.name = "";
  }
      
}