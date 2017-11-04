import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService }         from '../data.service';
import {Observable} from 'rxjs/Rx';
import { TimerObservable } from "rxjs/observable/TimerObservable";



declare var google: any;

@Component({
  selector: 'app-live-location',
  templateUrl: './live-location.component.html',
  styleUrls: ['./live-location.component.css']
})
export class LiveLocationComponent implements OnInit, OnDestroy  {
  showMap = false;
  routes = [];
  locations = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  
  private timer;
  private sub;

  constructor(private DataService: DataService) { 
  }

  showLiveLocation(){
    var position;
    var locations = [];
    var markers = [];
    var bounds = new google.maps.LatLngBounds();

    console.log(this.routes);
    this.routes.forEach(function(route, key) {
      console.log(route);
      var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key]
      locations.push(temp_array)
    })

    // var markerBounds = new google.maps.LatLngBounds();
    console.log(locations);
    // var locations = [
   //    ['User X, Surry Hills', -33.890542, 151.274856, 4],
   //    ['User Y, Lttle Bay', -33.923036, 151.259052, 5],
   //  ];
   console.log(this.routes);
    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 7,
      center: new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long),
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      position = new google.maps.LatLng(locations[i][1], locations[i][2]);
      marker = new google.maps.Marker({
        position: position,
        map: map
      });
      bounds.extend(position)
      // markerBounds.extend(new google.maps.LatLng(locations[i][1], locations[i][2]));
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

    if (locations.length === 1) {
      map.setZoom(16);
    } else {
       map.fitBounds(bounds);
    } 
  }

  onMapsReady(){
    if(this.showMap){
      this.showLiveLocation();
    }else
      this.onShowIndiaMap();
  }

  onShowIndiaMap(){
    var country = "india";
    var geocoder;
    geocoder = new google.maps.Geocoder();
    var map = new google.maps.Map(document.getElementById('show-india'), {
      zoom: 4,
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    geocoder.geocode( {'address' : country}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
            map.setCenter(results[0].geometry.location);
        }
    });
  }
  onItemSelect($event) {
      console.log(this.selectedItems);
  }

  showMarker() {
    this.showMap = true;
    var locationLists = [];

    this.selectedItems.forEach(function(list) {
      locationLists.push(list.id)
    })
    console.log(this.selectedItems);

    this.DataService.getLiveLocations(locationLists.join(","))
    .then(routes => this.routes = routes);
  }

  setMyOptions(options){
    var temp_options = [];
    options.forEach(function(option) {
      temp_options.push({
         id: option, itemName: option
      })
    });
    this.dropdownList = temp_options;
  }  

  ngOnInit() {
    (<any>window).googleMapsReady=this.onMapsReady.bind(this);
    var script = document.createElement("script");
    script.type = "text/javascript";
    document.getElementsByTagName("head")[0].appendChild(script);
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&callback=googleMapsReady";

    this.DataService.getDistinctPhoneNumber()
    .then(options => this.setMyOptions(options));
    this.timer = Observable.timer(1000, 5000);
    this.sub = this.timer.subscribe((t) => this.onTimeOut());
    this.dropdownSettings = { 
        singleSelection: false, 
        text:"Select Phone Numbers",
        selectAllText:'Select All',
        unSelectAllText:'UnSelect All',
        enableSearchFilter: true
      };  
  }
  
  onTimeOut() {
    if(this.selectedItems.length > 0){
      var locationLists = [];

      this.selectedItems.forEach(function(list) {
        locationLists.push(list.id)
      })
      this.DataService.getLiveLocations(locationLists.join(","))
      .then(routes => this.routes = routes);
      this.onMapsReady();
    }  
  }

  ngOnDestroy(){
    this.sub.unsubscribe();

  }
}
