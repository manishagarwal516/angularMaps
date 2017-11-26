import { Component, OnInit, AfterContentInit, Input, ViewChild,
				 ContentChildren, ElementRef, QueryList, ChangeDetectionStrategy, OnDestroy,OnChanges, SimpleChanges } from '@angular/core';

import { DataService }         from '../data.service';
import {Observable} from 'rxjs/Rx';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import {} from '@types/googlemaps';
//import {} from '@types/marker-animate-unobtrusive';

declare var google: any;

@Component({
	selector: 'app-live-location',
	templateUrl: './live-location.component.html',
	styleUrls: ['./live-location.component.css']
})
export class LiveLocationComponent implements OnInit, OnDestroy  {
	routes = [];
	locations = [];

	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	
	private timer;
	private sub;
	private map: google.maps.Map;
	private markers = []; 
	private loadingScript : boolean;
	private isEnabled : boolean;
	showMap : boolean
	@ViewChild('map') mapDiv : ElementRef;

	constructor(private DataService: DataService) { 
	}

	showLiveLocation(){
		var position;
		var locations = [];
		var bounds = new google.maps.LatLngBounds();
		console.log(this.routes);
		this.routes.forEach(function(route, key) {
			var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key]
			locations.push(temp_array)
		})

		var infowindow = new google.maps.InfoWindow();

		var marker, i;
		this.map.setCenter(new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long));

		for (i = 0; i < locations.length; i++) {  
			position = new google.maps.LatLng(locations[i][1], locations[i][2]);
			marker = new google.maps.Marker({
				position: position,
				map: this.map
			});
			console.log(locations[i][0]);
			// //console.log(marker);
			var temp_hash = {
				number: locations[i][0],
				marker: marker,
				lat: locations[i][1],
				long: locations[i][2]
			}
			this.markers.push(temp_hash);
			bounds.extend(position);
			// markerBounds.extend(new google.maps.LatLng(locations[i][1], locations[i][2]));
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
					infowindow.setContent(locations[i][0]);
					infowindow.open(this.map, marker);
				}
			})(marker, i));
		}

		if (locations.length === 1) {
			this.map.setZoom(17);
		} else {
			 this.map.fitBounds(bounds);
		} 
	}

	onItemSelect($event) {
		console.log(this.selectedItems);
	}

	clearMarker(){
		this.showMap = false;
		this.markers = [];
		this.selectedItems = [];
		this.renderMap();
	}

	showMarker() {
		this.showMap = true;
		var locationLists = [];

		this.selectedItems.forEach(function(list) {
			locationLists.push(list.id)
		})

		this.DataService.getLiveLocations(locationLists.join(","))
		.then(routes => {
			this.routes = routes;
			this.showLiveLocation();
		});
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

	ensureScript(){
		this.loadingScript = true;
		const document = this.mapDiv.nativeElement.ownerDocument;
		const script = <HTMLScriptElement>document.querySelector('script[id="googlemaps"]');
		if (script) {
			this.renderMap();
		} else {
			const script = document.createElement('script');
			script.id = 'googlemaps';
			script.type = 'text/javascript';
			script.async = true;
			script.defer = true;
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&region=IN';
			script.onload = () => {
				this.loadingScript = false;
				this.renderMap();
			};      
			document.body.appendChild(script);
	 }
	}

	showIndiaMap(){
		let geocoder = new google.maps.Geocoder();
		let indianMap = this.map;
		geocoder.geocode( {'address' : "india"}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
						indianMap.setCenter(results[0].geometry.location);
				}
		});
	}
	private renderMap() {
		const options = {
			zoom : 4,
			mapTypeControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
		if(this.showMap){
			this.showLiveLocation();
		}else{
			this.showIndiaMap();
		}
	}


	ngOnInit() {
//		SlidingMarker.initializeGlobally();
		setTimeout(() => {
			this.ensureScript();
		}, 200);
		this.showMap = false;
		this.DataService.getDistinctPhoneNumber()
		.then(options => this.setMyOptions(options));

		this.timer = Observable.timer(1000, 5000);
		this.sub = this.timer.subscribe((t) => this.onTimeOut());
		this.dropdownSettings = { 
				singleSelection: false, 
				text:"Select Phone Numbers",
				selectAllText:'Select All',
				unSelectAllText:'UnSelect All',
				enableSearchFilter: true,
				badgeShowLimit: 1
			};  
	}
	updateLocation(){
		//var newLatLng = new google.maps.LatLng("18.5597", "73.7799");
		console.log(this.markers);
		var locations = [];
		if(this.markers.length > 0){
			this.routes.forEach(function(route, key) {
				var temp_array = [route.Phone_number, route.Location.Lat, route.Location.Long, key]
				locations.push(temp_array)
			})

			var infowindow = new google.maps.InfoWindow();

			var marker, i;
		//	this.map.setCenter(new google.maps.LatLng(this.routes[0].Location.Lat, this.routes[0].Location.Long));
			
			for (i = 0; i < locations.length; i++) {  
				var position = new google.maps.LatLng(locations[i][1], locations[i][2]);
				var markerObj = this.markers.find(function (obj) { return obj.number === locations[i][0]; });

				markerObj.marker.setPosition(position);
				if(locations.length === 1)
					this.map.panTo(position);
			}
		}	

		//if(this.markers[0])
		//this.markers[0].setPosition(newLatLng);
	}

	onTimeOut() {
		if(this.selectedItems.length > 0){
			var locationLists = [];

			this.selectedItems.forEach(function(list) {
				locationLists.push(list.id)
			})
			this.DataService.getLiveLocations(locationLists.join(","))
			.then(routes => this.routes = routes);
			this.updateLocation();
		}  
	}

	ngOnDestroy(){
		this.sub.unsubscribe();

	}
}
