import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule, Modal, bootstrap4Mode } from 'ngx-modialog/plugins/bootstrap';


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
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './custom-option';
import {AlertComponent} from './alert.component'
import {AlertService} from './alert.service'




bootstrap4Mode();
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlertComponent,
    RoutesComponent,
    RouteMapComponent,
    LiveLocationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    AppRoutingModule,
    MultiselectDropdownModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpModule,
    Daterangepicker,
    NgDatepickerModule,
    UserModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [DataService, AuthService, {provide: LocationStrategy, useClass: HashLocationStrategy}, 
              {provide: ToastOptions, useClass: CustomOption},AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
