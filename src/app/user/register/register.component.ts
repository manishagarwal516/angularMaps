import { Component, OnInit,ViewContainerRef  } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	user : any
  user_types : any	
  userTypeText : string = "Add New Super Admin";
  userExistsError: boolean = false;
  userType: string;
  userErrors: string[] = [];
  constructor(private DataService : DataService, private authservice: AuthService, 
              private router: Router, private routeParams: ActivatedRoute,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
  }
	
	ngOnInit() {
    this.setUser();

  }

  saveUser(userRegistionForm: any){
    if(this.checkValidation()){
      this.userExistsError = false;
  		this.DataService.createUser(this.user)
        .subscribe((customerResponse: any) => {
          if(customerResponse.status === "error"){
            if(customerResponse.err === "User Already exists"){
              this.userExistsError = true;
            }else{
              this.toastr.error(customerResponse.err, 'Error!');
            }
          }else{
            userRegistionForm.resetForm();
            this.toastr.success("User Added Succesfully", 'Success!'); 
            setTimeout(() => {
              window.location.reload(true);
            }, 1000);
            
          }
      	});
    }
	}

  checkValidation(){
    let tempHash = {};
    let isValid = true;
    this.userErrors = [];
    this.userErrors.push("");
    let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if(this.user.username.length < 6){
       this.userErrors.push("Username should be of minimum 6 digits, the username is less than 6 digits.")
       isValid = false;
    }else{
      this.userErrors.push("");
    }

    if(this.user.password.length < 6){
       this.userErrors.push("Password should be of minimum 6 digits")
       isValid = false;
    }else{
      this.userErrors.push("");
    }

    if(!emailRegex.test(this.user.email_id)){
       this.userErrors.push("Email is invalid");
       isValid = false;
    }else{
      this.userErrors.push("");
    }

    this.userErrors.push("")

    if(this.user.phone_number.toString().length !== 10){
       this.userErrors.push("Phone number must be of 10 digits");
       isValid = false;
    }else{
      this.userErrors.push("");
    }
    return isValid;
  }


  setUser(){
    this.user_types = {
      superadmin: 'admin',
      admin: 'user',
      user: 'user'
    }

    if(this.authservice.checkforUserType() === "superadmin"){
      this.userTypeText = "Enter Admin Details";
    }else{
      this.userTypeText = "Enter User Details";
    }

    this.userType = this.user_types[this.userType];
    this.user = new User('', '','', '', '', null, this.user_types[this.userType]);


    this.routeParams.params.subscribe((params: Params) => {
      if(params["superadmin"] === "true"){
        this.userType = "superadmin";
        this.userTypeText = "Enter Super Admin Details";
        this.user = new User('','','jairamadmn@gmail.com', '', '', null, "superadmin");
      }
    });
  }
}
