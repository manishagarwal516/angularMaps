import { Component, OnInit, Input } from '@angular/core';
import { DataService }         from '../data.service';
import { ActivatedRoute, Params } from '@angular/router';

declare var google: any;

@Component({
	selector: 'app-route-map',
	templateUrl: './route-map.component.html',
	styleUrls: ['./route-map.component.css']
})
export class RouteMapComponent implements OnInit {
    @Input('map-route') mapRoute;
    @Input() routes;

	constructor(private DataService: DataService,
        private route: ActivatedRoute) { 
    }

	initMap() {
        var stations = [];
        var service = new google.maps.DirectionsService;
        var map = new google.maps.Map(document.getElementById('map-canvas'));
        this.mapRoute.directions.map(function(direction) {
            stations.push({lat: parseFloat(direction.Lat), lng: parseFloat(direction.Long)})
        })

        stations[0].name = "Source";
        stations[stations.length - 1].name = "Destination";
        // list of points

        // var stations1 = [
        //     {lat: 48.9812840, lng: 21.2171920, name: 'Source'},
        //     {lat: 48.9832841, lng: 21.2176398, },
        //     {lat: 48.9856443, lng: 21.2209088, },
        //     {lat: 48.9861461, lng: 21.2261563, },
        //     {lat: 48.9874682, lng: 21.2294855, },
        //     {lat: 48.9909244, lng: 21.2295512, },
        //     {lat: 48.9928871, lng: 21.2292352, },
        //     {lat: 48.9921334, lng: 21.2246742, },
        //     {lat: 48.9943196, lng: 21.2234792, },
        //     {lat: 48.9966345, lng: 21.2221262, },
        //     {lat: 48.9981191, lng: 21.2271386, },
        //     {lat: 49.0009168, lng: 21.2359527, },
        //     {lat: 49.0017950, lng: 21.2392890, },
        //     {lat: 48.9991912, lng: 21.2398272, },
        //     {lat: 48.9959850, lng: 21.2418410, },
        //     {lat: 48.9931772, lng: 21.2453901, },
        //     {lat: 48.9963512, lng: 21.2525850, },
        //     {lat: 48.9985134, lng: 21.2508423, },
        //     {lat: 49.0085000, lng: 21.2508000, },
        //     {lat: 49.0093000, lng: 21.2528000, },
        //     {lat: 49.0103000, lng: 21.2560000, },
        //     {lat: 49.0112000, lng: 21.2590000, },
        //     {lat: 49.0124000, lng: 21.2620000, },
        //     {lat: 49.0135000, lng: 21.2650000, },
        //     {lat: 49.0149000, lng: 21.2680000, },
        //     {lat: 49.0171000, lng: 21.2710000, },
        //     {lat: 49.0198000, lng: 21.2740000, },
        //     {lat: 49.0305000, lng: 21.3000000, name: 'Destination'},
        // ];
        
        //var stations = this.mapRoute.directions;
        // Zoom and center map automatically by stations (each station will be in visible map area)
        var lngs = stations.map(function(station) { return station.lng; });
        var lats = stations.map(function(station) { return station.lat; });
        map.fitBounds({
            west: Math.min.apply(null, lngs),
            east: Math.max.apply(null, lngs),
            north: Math.min.apply(null, lats),
            south: Math.max.apply(null, lats),
        });
        
        // Show stations on the map as markers
        for (var i = 0; i < stations.length; i++) {
            if (!stations[i]['name'])
                continue;
            new google.maps.Marker({
                position: stations[i],
                map: map
            });
        }

        // Divide route to several parts because max stations limit is 25 (23 waypoints + 1 origin + 1 destination)
        for (var i = 0, parts = [], max = 25 - 1; i < stations.length; i = i + max)
            parts.push(stations.slice(i, i + max + 1));

        // Callback function to process service results
        var service_callback = function(response, status) {
            if (status != 'OK') {
                console.log('Directions request failed due to ' + status);
                return;
            }
            var renderer = new google.maps.DirectionsRenderer;
            renderer.setMap(map);
            renderer.setOptions({ suppressMarkers: true, preserveViewport: true });
            renderer.setDirections(response);
        };
            
        // Send requests to service to get route (for stations count <= 25 only one request will be sent)
        for (var i = 0; i < parts.length; i++) {
            // Waypoints does not include first station (origin) and last station (destination)
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
	ngAfterViewInit(){


	}
	ngOnInit() {
        (<any>window).googleMapsReady=this.initMap.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAMevS2XHJBA7Rf8T-Or9KjzG_2QCCwp0w&callback=googleMapsReady";
		
	}

}
