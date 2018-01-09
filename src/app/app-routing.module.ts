import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { LiveLocationComponent } from './live-location/live-location.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'routes',  component: RoutesComponent },
  { path: 'route/:id',  component: RoutesComponent },
  { path: 'live-locations',  component: LiveLocationComponent },
  ];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}