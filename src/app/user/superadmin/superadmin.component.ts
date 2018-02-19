import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { User }    from '../user';
import { DataService } from '../../data.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {NotificationsService} from 'angular4-notify';


@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent implements OnInit {
    verficationId : string

  	 constructor(private DataService : DataService, private authservice: AuthService, 
              private router: Router, private routeParams: ActivatedRoute, 
              protected notificationsService: NotificationsService) { }

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
            this.notificationsService.addError(customerResponse.err);
          }else{
            if(accept)
               this.notificationsService.addInfo("SuperAdmin added successfully"); 
            else
              this.notificationsService.addInfo("Request is declined"); 
          }
    	});
	}

}
