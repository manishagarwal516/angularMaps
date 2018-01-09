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
        console.log("initMap");
         var stations = [];
        var service = new google.maps.DirectionsService;
        var map = new google.maps.Map(this.mapDiv.nativeElement);
        this.mapRoute.directions.map(function(direction) {
            stations.push({lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long)})
        })
        //console.log(stations);
        // var stations = [
        //     {lat: 21.1204204, lng: 79.0540382 , name: "source"},
        //     {lat: 21.120478333333335, lng: 79.05405, name: "source"}
        // ]
        stations[0].name = "Source";
        var infowindow = new google.maps.InfoWindow();
        stations[stations.length - 1].name = "Destination";
        var lngs = stations.map(function(station) { return station.lng; });
        var lats = stations.map(function(station) { return station.lat; });

        map.fitBounds({
            west: Math.min.apply(null, lngs),
            east: Math.max.apply(null, lngs),
            north: Math.min.apply(null, lats),
            south: Math.max.apply(null, lats),
        });
        
        // Show stations on the map as markers
        // for (var i = 0; i < stations.length; i++) {
        //     if (!stations[i]['name'])
        //         continue;
        //     var marker = new google.maps.Marker({
        //         position: stations[i],
        //         map: map
        //     });

        //     google.maps.event.addListener(marker, 'click', (function(marker, i) {
        //         return function() {
        //             infowindow.setContent(stations[i]['name']);
        //             infowindow.open(this.map, marker);
        //         }
        //     })(marker, i));
        // }

        // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
        for (var i = 0, parts = [], max = 25 - 1; i < stations.length; i = i + max)
            parts.push(stations.slice(i, i + max + 1));

        console.log(parts);
        // Callback function to process service results
        var service_callback = function(response, status) {
            if (status != 'OK') {
                console.log('Directions request failed due to ' + status);
                return;
            }
            var renderer = new google.maps.DirectionsRenderer;
            //map.setZoom(15);
            renderer.setMap(map);
            renderer.setOptions({ suppressMarkers: true, preserveViewport: true });
            renderer.setDirections(response);
        };
            
        for (var i = 0; i < parts.length; i++) {
            var waypoints = [];
            for (var j = 1; j < parts[i].length - 1; j++)
                waypoints.push({location: parts[i][j], stopover: false});
            // Service options
            var service_options = {
                origin: parts[i][0],
                destination: parts[i][parts[i].length - 1],
                waypoints: waypoints,
                travelMode: 'DRIVING'
            };
            // Send request
            service.route(service_options, service_callback);
        }
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
