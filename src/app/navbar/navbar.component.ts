import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(private authservice: AuthService, private router: Router) { }
	loginOrOut() {
    const isAuthenticated = this.authservice.isAuthenticated;
    if (this.authservice.checkforAuthentication()) {
      this.authservice.logout();
    }
    this.router.navigate(['/login']);
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
