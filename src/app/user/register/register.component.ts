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
  constructor(private DataService : DataService, private authservice: AuthService, 
              private router: Router, private routeParams: ActivatedRoute,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
  }
	
	ngOnInit() {
    this.setUser();

  }

  saveUser(userRegistionForm: any){
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
