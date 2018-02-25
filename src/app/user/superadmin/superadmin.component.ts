import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';



@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
    verficationId : string

  	 constructor(private DataService : DataService, private authservice: AuthService, 
              private router: Router, private routeParams: ActivatedRoute, 
              public toastr: ToastsManager, vcr: ViewContainerRef) { }

  	ngOnInit() {
      this.routeParams.params.subscribe((params: Params) => {
        this.verficationId = params['id']
        // if(params["superadmin"] === "true"){
          
        // }
      });
  	}

  	acceptRequest(accept){
  		var superAdminData = {
  			accept: accept,
        verificationUUID : this.verficationId
  		}
		this.DataService.createSuperAdmin(superAdminData)
      	.subscribe((customerResponse: any) => {
          if(customerResponse.status === "error"){
            this.toastr.error(customerResponse.err, 'Error!');
          }else{
            if(accept)
               this.toastr.success("User Added Succesfully", 'Success!'); 
            else
              this.toastr.info("Request is declined"); 
          }
    	});
	}

}
