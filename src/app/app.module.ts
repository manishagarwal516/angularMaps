import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutesComponent } from './routes/routes.component';
import { RouteMapComponent } from './route-map/route-map.component';
import { LiveLocationComponent } from './live-location/live-location.component';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { FormsModule } from '@angular/forms';
import { DataService } from './data.service';
import { AuthService } from './auth.service';
import { HttpModule } from "@angular/http";
import { Daterangepicker } from 'ng2-daterangepicker';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgDatepickerModule } from 'ng2-datepicker';
import { HomeComponent } from './home/home.component';
import { UserModule } from './user/user.module';
import {NotificationsModule, NotificationsService} from 'angular4-notify';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutesComponent,
    RouteMapComponent,
    LiveLocationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpModule,
    Daterangepicker,
    NgDatepickerModule,
    UserModule,
    NotificationsModule
  ],
  providers: [DataService, AuthService, NotificationsService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
