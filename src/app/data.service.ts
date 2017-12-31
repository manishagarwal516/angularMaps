import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Data } from './data';
declare var google: any;

@Injectable()
export class DataService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://localhost:3000/routes?Imei=';  // URL to web api

  constructor(private http: Http) { }

  getRoutes(imei_numbers,dates): Promise<Data[]> {
    return this.http.get(this.heroesUrl + imei_numbers + "&Date_time=" + dates, {})
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getLiveLocations(imei): Promise<Data[]> {
    return this.http.get("http://localhost:3000/routes/live?Imei=" + imei, {})
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getDistinctPhoneNumber(): Promise<Data[]> {
    return this.http.get("http://localhost:3000/routes/getDistinctPhoneNumber", {})
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getCordinates(routeId): Promise<Data[]> {
    return this.http.get("http://localhost:3000/routes/codinates/" + routeId, {})
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }
} 