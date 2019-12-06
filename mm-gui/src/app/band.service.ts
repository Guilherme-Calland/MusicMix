import { Injectable }    from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Band } from '../../../common/band';

@Injectable()
export class BandService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  private taURL = 'http://localhost:3002'; 
  requestBuffer = [];
  constructor(private http: HttpClient) {}

  create(band: Band): Observable<Band> {
    this.requestBuffer[0] = "create";
    this.requestBuffer[1] = band; 
    return this.http.post<any>(this.taURL + "/band", this.requestBuffer, {headers: this.headers})
        .pipe( 
            retry(2),
            map( res => {if (res.success) {return band;} else {return null;}} )
        ); 
  }
}