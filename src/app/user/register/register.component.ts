import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {NotificationsService} from 'angular4-notify';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	user : any
  user_types : any	
  constructor(private DataService : DataService, private authservice: AuthService, 
              private router: Router, private routeParams: ActivatedRoute,
              protected notificationsService: NotificationsService) { }
	
	ngOnInit() {
    this.setUser();
  }

  saveUser(){
		this.DataService.createUser(this.user)
      .subscribe((customerResponse: any) => {
        if(customerResponse.status === "error"){
            this.notificationsService.addError(customerResponse.err);
          }else{
              //this.setUser();
             this.notificationsService.addInfo("User Added Succesfully"); 
          }
    	});
	}

  setUser(){
    this.user_types = {
      superadmin: 'admin',
      admin: 'user',
      user: 'user'
    }
    var userType = this.authservice.checkforUserType();
    this.user = new User('','', '', '', null, this.user_types[userType]);


    this.routeParams.params.subscribe((params: Params) => {
      if(params["superadmin"] === "true"){
        console.log("add super user");
        this.user = new User('','', '', '', null, "superadmin");
      }
    });
  }
}
