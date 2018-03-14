import { Component, OnInit, Input,ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { DataService }         from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

declare var google: any;

@Component({
    selector: 'app-route-map',
    templateUrl: './route-map.component.html',
    styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit, OnChanges {
    @Input('map-route') mapRoute;
    @Input() routes;
    @Input('table-view') tableView;
    @ViewChild('map') mapDiv : ElementRef;
    loadingMap = false;
    combinedResults;
    directionsResultsReturned = 0; 
    heightStyle = {
        height : "512px"
    };    
    routeLength;
    private map: google.maps.Map;

    constructor(private DataService: DataService,
        private route: ActivatedRoute) { 
    }

    initMap() {
        var infowindow = new google.maps.InfoWindow();
        this.directionsResultsReturned = 0;
        this.heightStyle = {
            height : "472px"
        }; 
        //this.loadingMap = false;
        var stations = [];
        var waypoints = [];
        this.mapRoute.directions.map(function(direction) {
            stations.push({lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long)})
        })
        for (var i = 0, parts = [], max = 20 - 1; i < stations.length; i = i + max){
            parts.push(stations.slice(i, i + max + 1));
        }

        this.routeLength = parts.length; 
        var mapOptions = {
            zoom: 13,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        },
        map = new google.maps.Map(this.mapDiv.nativeElement, mapOptions),
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map,
            polylineOptions: { 
                strokeColor: "#1a8ff4",
                strokeOpacity: 1.0,
                strokeWeight: 7,
            },
            suppressMarkers : true
        });

        
        for (var i = 0; i < parts.length; ++i) {
            this.getRouteStations(parts[i], directionsService, directionsDisplay, map, infowindow);
        }
    }

    createMarker(latlng, title, map, infowindow, iconImgUrl) {
        console.log("In marker0");
        var marker = new google.maps.Marker({
            position: latlng,
            title: title,
            map: map,
            icon: iconImgUrl,
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(title);
            infowindow.open(map, marker);
        });
    }

    createEndMarker(latlng, title, map, infowindow, iconImgUrl) {
        var marker = new google.maps.Marker({
            position: latlng,
            title: title,
            map: map,
            icon: iconImgUrl,
        });

        google.maps.event.addListener(marker, 'click', function () {
            infowindow.setContent(title);
            infowindow.open(map, marker);
        });
    }

    getRouteStations(stations, directionsService, directionsDisplay, map, infowindow){
        var waypoints = [];
        var source = new google.maps.LatLng(stations[0].lat, stations[0].lng),
        destination = new google.maps.LatLng(stations[stations.length -1].lat, stations[stations.length -1].lng)
       
        for (var i = 1; i < 24 ; i++) {
            waypoints.push({location: new google.maps.LatLng(stations[1].lat, stations[1].lng), stopover: false});
        }
        
        this.calculateAndDisplayRoute(directionsService, directionsDisplay, source, destination, waypoints, map, infowindow);

    }

    calculateAndDisplayRoute(directionsService, directionsDisplay, source, destionation, waypoints, map, infowindow) {
        var _this = this;
        var combinedLength = this.routeLength;
        console.log("IN calculateAndDisplayRoute");
        directionsService.route({
            origin: source,
            destination: destionation,
           // waypoints: waypoints,
            optimizeWaypoints: true,
            avoidTolls: true,
            avoidHighways: false,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            console.log(_this.directionsResultsReturned);
            if (status == google.maps.DirectionsStatus.OK) {
                if (_this.directionsResultsReturned == 0) { // first bunch of results in. new up the combinedResults object
                    var start = new google.maps.LatLng(response.routes[0].legs[0].start_location.lat(), response.routes[0].legs[0].start_location.lng());
                    _this.createMarker(start, 'start', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/source.png");
                    _this.combinedResults = response;
                    _this.directionsResultsReturned++;
                }
                else {
                    _this.combinedResults.routes[0].legs = _this.combinedResults.routes[0].legs.concat(response.routes[0].legs);
                    _this.combinedResults.routes[0].overview_path = _this.combinedResults.routes[0].overview_path.concat(response.routes[0].overview_path);
 
                    _this.combinedResults.routes[0].bounds = _this.combinedResults.routes[0].bounds.extend(response.routes[0].bounds.getNorthEast());
                    _this.combinedResults.routes[0].bounds = _this.combinedResults.routes[0].bounds.extend(response.routes[0].bounds.getSouthWest());
                    _this.directionsResultsReturned++;
                }
                
                
                //this.mapLoop++;
                
                console.log(_this.directionsResultsReturned, combinedLength);
                if (_this.directionsResultsReturned == combinedLength){
                    var end = new google.maps.LatLng(response.routes[0].legs[0].end_location.lat(), response.routes[0].legs[0].end_location.lng());
                    _this.createEndMarker(end, 'end', map, infowindow, "http://ec2-13-126-65-82.ap-south-1.compute.amazonaws.com/assets/images/destination.png");

                    setTimeout(() => {
                        directionsDisplay.setDirections(_this.combinedResults);
                    }, 2);
           
                } 
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }
    

    showIndiaMap(){
        let options = {
            zoom : 4,
            mapTypeControl: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        let geocoder = new google.maps.Geocoder();
        let indianMap = new google.maps.Map(this.mapDiv.nativeElement, options);
        geocoder.geocode( {'address' : "india"}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                        indianMap.setCenter(results[0].geometry.location);
                }
        });
    }
    ensureScript(mapType){
        const document = this.mapDiv.nativeElement.ownerDocument;
        const script = <HTMLScriptElement>document.querySelector('script[id="googlemaps"]');
        if (script) {
            if(this.mapRoute.directions && mapType === "route"){
                this.initMap();
            }else if(this.tableView && mapType === "india"){
                this.showIndiaMap();
            }
        } else {
            const script = document.createElement('script');
            script.id = 'googlemaps';
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqtrF1DwnhnJ3sZKGvVixC0ItY6LC778E&region=IN&libraries=geometry';
            script.onload = () => {
                if(this.mapRoute.directions && mapType === "route"){
                    this.initMap();
                }else if(this.tableView && mapType === "india"){
                    this.showIndiaMap();
                }
            };      
            document.body.appendChild(script);
     }
    }

    ngOnChanges(changes: SimpleChanges) {
      for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        setTimeout(() => {
            if(cur && prev && propName === "mapRoute"){
                this.ensureScript("route");
            }
        }, 200);
        //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }

    ngOnInit() {
        setTimeout(() => {
            this.loadingMap = true;
            this.ensureScript("india");
        }, 200);
    }

}
