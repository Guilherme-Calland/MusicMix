import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Event } from '../../../common/event';

@Injectable()
export class EventService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3001'; 
  requestBuffer = [];
  constructor(private http: HttpClient) {}

  create(event: Event): Observable<Event> {
    this.requestBuffer[0] = "create";
    this.requestBuffer[1] = event; 
    return this.http.post<any>(this.taURL + "/event", this.requestBuffer, {headers: this.headers})
        .pipe( 
            retry(2),
            map( res => {if (res.success) {return event;} else {return null;}} )
        ); 
  }

  check(event: Event): Observable<Event> {
    this.requestBuffer[0] = "check";
    this.requestBuffer[1] = event;
    return this.http.post<any>(this.taURL + "/event", this.requestBuffer, {headers: this.headers})
      .pipe( 
        retry(2),
        map( res => {if (res.success) {return event;} else {return null;}} )
      ); 
  }

  getEvent(): Observable<Event> {
    this.requestBuffer[0] = "get";
    this.requestBuffer[1] = null; 
    return this.http.post<any>(this.taURL + "/event", this.requestBuffer, {headers: this.headers})
      .pipe( 
        retry(2)
      ); 
  }
}