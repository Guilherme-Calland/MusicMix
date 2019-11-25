import {Events} from '../common/events';

export class Musician {
    username: string;
    password: string;
    name: string;
    email: string; 
    repertoire: string[];
    instruments: string[];
    events: Events[];
  
    constructor() {
      this.clean();
    }
  
    clean(): void {
      this.username = "";
      this.password = "";
      this.name = "";
      this.email = "";
      this.repertoire= [];
      this.instruments = [];
      this.events = [];
    }
  
    clone(): Musician {
      var musician: Musician = new Musician();
      musician.copyFrom(this);
      return musician;
    }
  
    copyFrom(from: Musician): void {
      this.username = from.username;
      this.password = from.password;
      this.name = from.name;
      this.email = from.email;
      this.repertoire = from.repertoire;
      this.instruments = from.instruments;
      this.events = from.events;
      //this.copyMetasFrom(from.ichwillsterben);
    }
  
    /*copyMetasFrom(from: Map<string,string>): void {
      this.ichwillsterben = new Map<string,string>();
      for (let key in from) {
        this.ichwillsterben[key] = from[key];
      }
    }*/
  }

