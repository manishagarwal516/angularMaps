import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DataService }         from '../data.service';


declare var google: any;

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {
	routes = [];
	singleRoute = {};
	tableView = true;
	mapView = true;
	showDropdowns = true;
	coordinates;
	id = 0;

	dropdownList = [];
	selectedItems = [];
	dropdownSettings = {};
	public daterange: any = {};

	

	constructor(private routeParams: ActivatedRoute, 
				private DataService: DataService) { 
				
	}

	getRoutes(phone_numbers,dates){
		this.tableView = false;
		this.DataService.getRoutes(phone_numbers,dates)
		.then((routes) => {
			localStorage.setItem('routes', JSON.stringify(routes));
			this.updateTheRoute(routes);
		});
	}

	updateTheRoute(routes){
		var sourcePromises = this.getAddress(routes, "source");
		Promise.all(sourcePromises);
		var destinationPromises = this.getAddress(routes, "destination");
		Promise.all(destinationPromises);
		this.routes = routes;
		console.log(this.routes);
	}

	getAddress(routes, key){
		var promises = [];
		routes.forEach(function(route) {
			var promise = new Promise((resolve, reject) => {
				var geocoder, address;
				geocoder = new google.maps.Geocoder();
				var latlng = new google.maps.LatLng(route[key].Lat, route[key].Long);
				console.log(route[key]);
				geocoder.geocode(
					{'latLng': latlng}, 
					function(results, status) {
						if (status == google.maps.GeocoderStatus.OK) {
						  if (results[0]) {
							  address = results[0].formatted_address;
						  }
						  else  {
							  address = "No Address";
						  }
					  }
					   else {
						  address = "No Address";
						}
						delete route[key];
						route[key] = address;
						resolve(route);
					}
				);
			});	
			promises.push(promise);
		});
		return promises;
	}

	getRoute(id){
		this.DataService.getCordinates(id)
            .then((coordinates) => {
            	this.showDropdowns = false;
             	this.coordinates = coordinates;
				this.mapView = false;
				console.log(this.routes);
				this.singleRoute = {
					"id":id,
					"source":"Baner",
					"destination":"Anudh",
					"directions": this.coordinates[0].Location
				}
				console.log(this.singleRoute);
            })
				// console.log(this.coordinates[0].Location);
            // });
	}

	onChange($event) {
        console.log(this.selectedItems);
    }

    public options: any = {
    	singleDatePicker: true,
        locale: { format: 'MM-DD-YYYY' },
        alwaysShowCalendars: true,
        showDropdowns: true,
        maxDate: new Date(),
        minDate: new Date(new Date().setFullYear(new Date().getFullYear() - 10))
    };

    public selectedDate(value: any, datepicker?: any) {
        // this is the date the iser selected
        console.log(value);

        // any object can be passed to the selected event and it will be passed back here
        datepicker.start = value.start;
        datepicker.end = value.end;

        // or manupulat your own internal property
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = value.label;
    }

    showRouteTable(){
    	var dates = this.daterange.start.format("MM-DD-YYYY") + ","+ this.daterange.end.format("MM-DD-YYYY HH:mm:ss")
    	console.log(this.daterange.start.format("MM-DD-YYYY"), this.daterange.end.format("MM-DD-YYYY"));
    	var locationLists = [];

		this.selectedItems.forEach(function(list) {
			locationLists.push(list.id)
		})
		this.getRoutes(locationLists.join(","),dates);
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
		this.DataService.getDistinctPhoneNumber()
		.then(options => this.setMyOptions(options));

		this.routeParams.params.subscribe((params: Params) => {
			this.id = +params['id'];
			if(this.id){
				this.routes = JSON.parse(localStorage.getItem('routes'));
				this.getRoute(this.id);
			}
		});

		this.dropdownSettings = { 
			singleSelection: false, 
			text:"Select Phone Numbers",
			selectAllText:'Select All',
			unSelectAllText:'UnSelect All',
			enableSearchFilter: true,
			badgeShowLimit: 1
		};  
	}

}
