import {Events} from '../common/events';

export class Musician {
    name: string;
    email: string; 
    password: string;
    repertoire: string[];
    instruments: string[];
    events: Events[];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.name = "";
      this.email = "";
      this.password= "";
      this.repertoire;
      this.instruments;
      this.events;
    }
  
    clone(): Musician {
      var musician: Musician = new Musician();
      musician.copyFrom(this);
      return musician;
    }
  
    copyFrom(from: Musician): void {
      this.name = from.name;
      this.email = from.email;
      this.password= "";
      this.repertoire;
      this.instruments;
      this.events;
      //this.copyMetasFrom(from.ichwillsterben);
    }
  
    /*copyMetasFrom(from: Map<string,string>): void {
      this.ichwillsterben = new Map<string,string>();
      for (let key in from) {
        this.ichwillsterben[key] = from[key];
      }
    }*/
  }

