import { Component, OnInit } from '@angular/core';
import { Event } from '../../../common/event';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

    event: Event = new Event();
    tempEvent: Event = new Event();
    searching: boolean = false;
    constructor(private eventService: EventService) {}

    invalidEvent: boolean = false;

    searchEvent(e: Event): void{
        this.eventService.check(e).subscribe(
            ar => {
                if(ar) {
                } else {
                    this.invalidEvent = true;
                }
            }
        )
        this.getEvent();
    }

    getEvent(): void {
        //salva o usuario atual em "musician"
        this.eventService.getEvent()
        .subscribe(
          (e) => 
          {this.event = e;},
          (msg) => { alert(msg.message); }
        );
    
    }

    onMove(): void {
        this.invalidEvent = false;
    }
}