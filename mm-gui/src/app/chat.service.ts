import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Message } from '../../../common/message';

@Injectable()
export class ChatService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3002'; 
  requestBuffer = [];
  constructor(private http: HttpClient) {}

  create(message: Message): Observable<Message> {
    this.requestBuffer[0] = "create";
    this.requestBuffer[1] = message; 
    return this.http.post<any>(this.taURL + "/message", this.requestBuffer, {headers: this.headers})
        .pipe( 
            retry(2),
            map( res => {if (res.success) {return message;} else {return null;}} )
        ); 
  }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.taURL + "/chat")
      .pipe(
        retry(2)
      );
  }
}