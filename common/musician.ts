import {Event} from './event';
import {Band} from './band';
import {Instrument} from './instrument';
import {Song} from './song';

export class Musician {
  username: string;
  password: string;
  name: string;
  email: string;
  bands: Band[]; 
  instruments: Instrument[];
  repertoire: Song[];
  events: Event[];

  constructor() {
    this.clean();
  }

  clean(): void {
    this.username = "";
    this.password = "";
    this.name = "";
    this.email = "";
    this.instruments = [];
    this.bands = [];
    this.repertoire = [];
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
    this.instruments = from.instruments;
    this.bands = from.bands;
    this.repertoire = from.repertoire;
    this.events = from.events;
  }
}

