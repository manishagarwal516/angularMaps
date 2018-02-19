import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
 
const routes: Routes = [
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'register/:superadmin/superadmin', component: RegisterComponent},
	{ path: 'superuser/confirmation/:id', component: SuperadminComponent},
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}