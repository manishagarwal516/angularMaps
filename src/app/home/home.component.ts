import { Component, OnInit, ViewChild,
				 ContentChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private map: google.maps.Map;
	private loadingScript : boolean;
	private isEnabled : boolean;
	showMap : boolean
	@ViewChild('map') mapDiv : ElementRef;	

  	constructor() { }

  	private renderMap() {
		const options = {
			zoom : 4,
			mapTypeControl: true,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		};
		this.map = new google.maps.Map(this.mapDiv.nativeElement, options);
		this.showIndiaMap();
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
			script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBqtrF1DwnhnJ3sZKGvVixC0ItY6LC778E&region=IN';
			script.onload = () => {
				this.loadingScript = false;
				this.renderMap();
			};      
			document.body.appendChild(script);
	 }
	}

  ngOnInit() {
  	setTimeout(() => {
		this.ensureScript();
	}, 200);
  }

}
