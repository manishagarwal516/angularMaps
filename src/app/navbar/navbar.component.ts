import { Component, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import {AlertComponent} from './../alert.component'
import {AlertService} from './../alert.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginLogoutText: string = 'Login';
    showNavLinks : boolean = false;
    userType : string = "user";
    userTypeText : string = "Create User";
    sub: Subscription;

  constructor(private authservice: AuthService, private router: Router,
              public toastr: ToastsManager, vcr: ViewContainerRef, private alertService: AlertService) { }
  loginOrOut() {
    const isAuthenticated = this.authservice.isAuthenticated;
    
    if (this.authservice.checkforAuthentication()) {
      let that = this;
      setTimeout(function() {
       that.alertService.confirmThis("Are you sure, you want to logout ?",function(){
            that.authservice.logout();
            that.router.navigate(['/login']);
          },function(){
          })
           
         },2)
    }else{
      this.router.navigate(['/login']);
    }
  }


  ngOnInit() { 

    this.setLoginLogoutText();
    this.sub = this.authservice.authChanged
        .subscribe((loggedIn: boolean) => {
            this.setLoginLogoutText();
        },
        (err: any) => console.log(err));
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  setLoginLogoutText() {
    console.log("ssss");
    this.loginLogoutText = (this.authservice.checkforAuthentication()) ? 'Logout' : 'Login';
    this.showNavLinks = (this.authservice.checkforAuthentication()) ? true : false;
    this.userType = this.authservice.checkforUserType();

    if(this.userType === "superadmin"){
      this.userTypeText = "Create Admin";
    }else{
      this.userTypeText = "Create User";
    }
  }
}
