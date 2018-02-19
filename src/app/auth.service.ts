import { Injectable, Output, EventEmitter } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; 
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthService {
	isAuthenticated: boolean = false;
	authUrl: string = "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com:3000";

  	constructor(private http: Http) { }
	@Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

	login(data: any){
		let headers = new Headers();
  		headers.append('Content-Type', 'application/json');
  		let opts = new RequestOptions();
  		opts.headers = headers;

  		data.username = data.username;
  		data.grant_type = "password";
  		data.client_id = "system";
  		data.client_secret = "f558ba166258089b2ef322c340554c";
  		delete data.email_id;
  		delete data.address;
  		delete data.phone_number;

		return this.http.post(this.authUrl + '/oauth/token', data, opts)
			.map((response: Response) => {
			   	const loggedIn = response.json();
			   	this.isAuthenticated = true;
				localStorage.setItem('loggedIn', loggedIn.access_token.access_token);
				localStorage.setItem('userType', loggedIn.access_token.type);
				this.authChanged.emit(true);
				return true;
		   	})
		   .catch(this.handleError);
	}

	checkforAuthentication(){
		if (localStorage.getItem('loggedIn')) {
            return true;
        }
        return false;
	}

	checkforUserType(){
		var userType = localStorage.getItem('userType');
		if (userType) {
			return userType;
        }
        return "user";
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
	
	logout(){
		this.isAuthenticated = false;
		localStorage.removeItem('loggedIn');
		localStorage.removeItem('userType');
		this.authChanged.emit(false);
	}


}
