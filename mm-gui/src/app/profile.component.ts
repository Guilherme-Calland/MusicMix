import { Component, OnInit} from '@angular/core';
import { NgModule } from '@angular/core';
import { MusicianService } from './musician.service';
import { LoginComponent } from './login.component';
import { Musician } from '../../../common/musician';
import { Band } from '../../../common/band';
import { Event } from '../../../common/event';
import { Instrument } from '../../../common/instrument';
import { Song } from '../../../common/song';
import { stringify } from 'querystring';
import { EventService } from './event.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  
  constructor(private musicianService: MusicianService, private eventService: EventService) {}
  
  //////////////////////////
  //Musicians
  ///////////////////////////
  
  musicians: Musician[];
  musician: Musician;
  events: Event[] = [];
  duplicatedeventname:Boolean=false;
  duplicatedbandname:boolean=false;
  chatMode : boolean = false;
  
  
  editProfileMode : Boolean = false;
  creatingEvent : Boolean = false;

  updateMusician(musician: Musician): void {
    this.musicianService.update(musician).subscribe(
       (a) => { if (a == null) alert("musician not found :("); },
       (msg) => { alert(msg.message); }
    );
  }

  //insere um novo intrumento em musico
  newInstrument(): void{
    var instrument = new Instrument();
    this.musician.instruments.push(instrument);
  }

  //insere uma nova musica no repertorio do musico 
  newSong(): void{
    var song = new Song();
    this.musician.repertoire.push(song);
  }

  ngOnInit(): void {

    this.musicianService.getMusicians()
    .subscribe(
        (ms) =>  { this.musicians = ms; },
        (msg) => { alert(msg.message); }
    );
    
    //salva o usuario atual em "musician"
    this.musicianService.getLoggedMusician()
    .subscribe(
      (m) => 
      {this.musician = m;},
      (msg) => { alert(msg.message); }
      );
      
    }
    
    /////////////////////
    //Events
    //////////////////////
    

  newEvent(): void{
    var event = new Event();
    this.musician.events.push(event);
    this.events.pop();
    this.events.push(event);
  }

  createEvent(e: Event): void {
    this.eventService.create(e).subscribe(
      ar => {
        if (ar) {
        } else {
            this.duplicatedeventname = true;
        } 
      },
      msg => { alert(msg.message); });
  }

  ////////////
  ///Bands
  ////////////

  //insere uma nova banda no musico
  newBand(): void {
    var band = new Band();
    this.musician.bands.push(band);
  }


  ////////////////
  ////Chat
  ///////////////


}