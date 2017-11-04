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
import { HttpModule } from "@angular/http";
import { Daterangepicker } from 'ng2-daterangepicker';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RoutesComponent,
    RouteMapComponent,
    LiveLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiselectDropdownModule,
    AngularMultiSelectModule,
    FormsModule,
    HttpModule,
    Daterangepicker
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
