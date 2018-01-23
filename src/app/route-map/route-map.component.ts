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
    private map: google.maps.Map;

    constructor(private DataService: DataService,
        private route: ActivatedRoute) { 
    }

    initMap() {
        var stations = [];
        var waypoints = [];
        this.mapRoute.directions.map(function(direction) {
            stations.push({lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long)})
        })
        console.log(this.mapRoute.directions);
        console.log(stations)
        for (var i = 0, parts = [], max = 25 - 1; i < stations.length; i = i + max){
            parts.push(stations.slice(i, i + max + 1));
        }
        console.log("parts")
        console.log(parts);
        var mapOptions = {
            zoom: 7
        },
        map = new google.maps.Map(this.mapDiv.nativeElement, mapOptions),
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
            map: map
        });

        //for (var i = 0; i < 1; ++i) {
            this.getRouteStations(stations, directionsService, directionsDisplay);
        //}
    }

    getRouteStations(stations, directionsService, directionsDisplay){
        console.log(stations);
        var waypoints = [];
        var source = new google.maps.LatLng(stations[0].lat, stations[0].lng),
        destination = new google.maps.LatLng(stations[stations.length -1].lat, stations[stations.length -1].lng)
        
        // Instantiate a directions service.
        
        // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
        // for (var i = 1; i < 24 ; i++) {
        //     waypoints.push({location: new google.maps.LatLng(stations[1].lat, stations[1].lng), stopover: false});
        // }
        console.log(waypoints.length);
        this.calculateAndDisplayRoute(directionsService, directionsDisplay, source, destination, waypoints);

    }

    calculateAndDisplayRoute(directionsService, directionsDisplay, source, destionation, waypoints) {
        directionsService.route({
            origin: source,
            destination: destionation,
           // waypoints: waypoints,
            avoidTolls: true,
            avoidHighways: false,
            travelMode: google.maps.TravelMode.DRIVING
        }, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
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
                console.log(status)
                if (status == google.maps.GeocoderStatus.OK) {
                        indianMap.setCenter(results[0].geometry.location);
                }
        });
    }
    ensureScript(){
        const document = this.mapDiv.nativeElement.ownerDocument;
        const script = <HTMLScriptElement>document.querySelector('script[id="googlemaps"]');
        if (script) {
            console.log(this.tableView);
            if(this.mapRoute.directions){
                this.initMap();
            }else if(this.tableView){
                this.showIndiaMap();
            }
        } else {
            const script = document.createElement('script');
            script.id = 'googlemaps';
            script.type = 'text/javascript';
            script.async = true;
            script.defer = true;
            script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&region=IN';
            script.onload = () => {
                console.log(this.tableView);
                if(this.mapRoute.directions){
                    this.initMap();
                }else if(this.tableView){
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
            if(cur && prev){
                 this.ensureScript();
            }
        }, 200);
        //this.changeLog.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }

    ngOnInit() {
        console.log(this.mapRoute)
        setTimeout(() => {
            console.log("dsdds")
            this.ensureScript();
        }, 200);
    }

}
