import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';
import { LiveLocationComponent } from './live-location/live-location.component';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent ,canActivate: [ CanActivateGuard ]  },
  { path: 'routes',  component: RoutesComponent ,canActivate: [ CanActivateGuard ]  },
  { path: 'route/:id',  component: RoutesComponent ,canActivate: [ CanActivateGuard ]  },
  { path: 'live-locations',  component: LiveLocationComponent ,canActivate: [ CanActivateGuard ]  },
  ];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [CanActivateGuard]
})
export class AppRoutingModule {}