import {Musician} from './musician';

export class Band{
    public name: String;

    constructor() {
        this.clean();
      }
    
      clean(): void {
        this.name = "";
      }
    
      clone(): Band {
        var band: Band = new Band();
        band.copyFrom(this);
        return band;
      }
    
      copyFrom(from: Band): void {
        this.name = from.name;
      }
      
}