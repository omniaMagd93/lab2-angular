import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


const api: string = "http://demo0765936.mockable.io/";

@Injectable()
export class MyserviceService {

  constructor(
    private http: HttpClient
  ) { }

  getPath(endpoint: string): Observable<any> {
    return this.http.get(api + endpoint);
  }
}
