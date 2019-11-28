import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Musician } from '../../../common/musician';

@Injectable()
export class MusicianService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3000';
  requestBuffer = [];
  constructor(private http: HttpClient) {}

  create(musician: Musician): Observable<Musician> {
    this.requestBuffer[0] = "create";
    this.requestBuffer[1] = musician; 
    return this.http.post<any>(this.taURL + "/musician", this.requestBuffer, {headers: this.headers})
             .pipe( 
                retry(2),
                map( res => {if (res.success) {return musician;} else {return null;}} )
              ); 
  }

  check(musician: Musician): Observable<Musician> {
    this.requestBuffer[0] = "check";
    this.requestBuffer[1] = musician;
    return this.http.post<any>(this.taURL + "/musician", this.requestBuffer, {headers: this.headers})
             .pipe( 
                retry(2),
                map( res => {if (res.success) {return musician;} else {return null;}} )
              ); 
  }


  update(musician: Musician): Observable<Musician> {
    return this.http.put<any>(this.taURL + "/musician",JSON.stringify(musician), {headers: this.headers})          .pipe( 
                retry(2),
                map( res => {if (res.success) {return musician;} else {return null;}} )
              ); 
  }

  getMusicians(): Observable<Musician[]> {
    return this.http.get<Musician[]>(this.taURL + "/musicians")
              .pipe(
                 retry(2)
               );
  }

}