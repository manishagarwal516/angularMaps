import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';


import { DataService } from '../data.service';
import { SuperadminComponent } from './superadmin/superadmin.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    HttpModule
  ],
  declarations: [LoginComponent, RegisterComponent, SuperadminComponent],
  providers: [DataService],
})
export class UserModule { }
