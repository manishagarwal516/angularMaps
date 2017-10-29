import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import { DataService }         from '../data.service';

declare var google: any;

@Component({
  selector: 'app-live-location',
  templateUrl: './live-location.component.html',
  styleUrls: ['./live-location.component.css']
})
export class LiveLocationComponent implements OnInit {
	optionsModel: number[];
	myOptions: IMultiSelectOption[];
	showMap = false;
	routes = [];
	locations = [];

  constructor(private DataService: DataService) { }

  onMapsReady(){
  	var locations = [];
  	console.log(this.routes);
  	this.routes.forEach(function(route, key) {
  		console.log(route);
  		var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key]
  		locations.push(temp_array)
  	})
  	console.log(locations);
  	// var locations = [
   //    ['User X, Surry Hills', -33.890542, 151.274856, 4],
   //    ['User Y, Lttle Bay', -33.923036, 151.259052, 5],
   //  ];

    var map = new google.maps.Map(document.getElementById('map-canvas'), {
      zoom: 7,
      center: new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long),
      mapTypeControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  	onChange($event) {
        console.log(this.optionsModel);
    }

    showMarker() {
        this.showMap = true;
        console.log(this.optionsModel);

        this.DataService.getLiveLocations(this.optionsModel.join(","))
		.then(routes => this.routes = routes);
		
	  	(<any>window).googleMapsReady=this.onMapsReady.bind(this);
	    var script = document.createElement("script");
	    script.type = "text/javascript";
	    document.getElementsByTagName("head")[0].appendChild(script);
	    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&callback=googleMapsReady";
    }

    setMyOptions(options){
    	var temp_options = [];
    	options.forEach(function(option) {
    		temp_options.push({
    			 id: option, name: option
    		})
    	});
    	this.myOptions = temp_options;
    }	

  	ngOnInit() {
  		this.DataService.getDistinctPhoneNumber()
		.then(options => this.setMyOptions(options));
  	}
}
