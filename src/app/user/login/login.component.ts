import { Component, OnInit } from '@angular/core';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	  user : any
    invalidLogin: boolean = false;

  	constructor(private data : DataService,
  				private auth : AuthService,
          private router: Router) { }

  	ngOnInit() {
  		this.user = new User('','', '','',null,'');
  	}

  	validateUser(){
  		console.log(this.user);
	    this.auth.login(this.user)
      .subscribe((status: boolean) => {

          if (status) {
            this.router.navigate(['/home']);
          }
      },
      (err: any) => this.invalidLogin = true);
	}
}
