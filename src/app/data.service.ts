import { Injectable }    from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpHeaders } from '@angular/common/http';
import { User }    from './user/user';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

import { Data } from './data';
declare var google: any;

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class DataService {


  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = 'http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes?Imei=';  // URL to web api
  private tokenDetails = localStorage.getItem('loggedIn');

  constructor(private http: Http) { }

  getRoutes(imei_numbers,dates): Promise<Data[]> {
    let headers = new Headers();
    var token = 'bearer ' + this.tokenDetails;
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get(this.heroesUrl + imei_numbers + "&Date_time=" + dates, opts)
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getLiveLocations(imei): Promise<Data[]> {
    let headers = new Headers();
    var token = 'bearer ' + this.tokenDetails;
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/live?Imei=" + imei, opts)
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getDistinctPhoneNumber(): Promise<Data[]> {
    let headers = new Headers();
    var token = 'bearer ' + this.tokenDetails;
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/getDistinctPhoneNumber", opts)
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  getCordinates(routeId, imei): Promise<Data[]> {
    let headers = new Headers();
    var token = 'bearer ' + this.tokenDetails;
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', token);
    let opts = new RequestOptions();
    opts.headers = headers;

    return this.http.get("http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/routes/codinates/" + routeId + "/" + imei , opts)
               .toPromise()
               .then(response => response.json()['json'] as Data[]);
  }

  createUser(userData){
    var url = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/user"
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post(url,userData,opts)
      .map((response: Response) => {
           return response.json();
         })
    .catch(this.handleError);
  }

  createSuperAdmin(accept){
    var url = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000/user/superadmin"
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let opts = new RequestOptions();
    opts.headers = headers;
    return this.http.post(url,accept,opts)
      .map((response: Response) => {
           return response.json();
         })
    .catch(this.handleError);
  }

  handleError(error: any) {
    console.log('server error:', error); 
        if (error instanceof Response) {
          let errMessage = '';
          try {
            errMessage = error.json().error;
          } catch(err) {
            errMessage = error.statusText;
          }
          return Observable.throw(errMessage);
        }
        return Observable.throw(error || 'Node.js server error');
  }
} 