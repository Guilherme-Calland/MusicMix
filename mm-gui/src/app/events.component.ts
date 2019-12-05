import { Component, OnInit } from '@angular/core';
import { Musician } from '../../../common/musician';
import { MusicianService } from './musician.service';
import { Event } from '../../../common/event';
import { EventService } from './event.service';
/*@Component({
    selector: 'app-root',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })*/

export class EventComponent /*implements OnInit*/{
    event: Event = new Event ();
    events: Event [] =[];
    duplicatedeventname: boolean = false;

    constructor(private eventService: EventService){}
    
    createEvent(e:Event): void{
        this.eventService.create(e).subscribe(
            ar=>{
                if (ar){

                } else {
                    this.duplicatedeventname=true;
                }
            },
            msg=> {alert(msg.message);}
        )
    }
    onMove():void{
        this.duplicatedeventname=false;
    }
}