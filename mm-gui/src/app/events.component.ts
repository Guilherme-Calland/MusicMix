import { Component} from '@angular/core';
import { Event } from '../../../common/event';
import { EventService } from './event.service';

@Component({
  selector: 'app-root',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

    event: Event = new Event();
    events: Event[] = [];
    duplicatedeventname: boolean = false;

    constructor(private eventService: EventService) {}

    createEvent(e: Event): void {
        this.eventService.create(e).subscribe(
        ar => {
        if (ar) {
            //this.enterProfile(m);
        } else {
            this.duplicatedeventname = true;
        } 
        },
        msg => { alert(msg.message); }
        );
    }

    onMove(): void {
        this.duplicatedeventname = false;
    }
    create
}