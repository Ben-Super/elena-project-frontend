import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as Leaflet from 'leaflet';
import { DataService } from '../services/data.service';
import { RequestService } from '../services/request.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() dataService: DataService;

  private map: Leaflet.Map;
  private waypoints: Leaflet.LatLng[] = [];
  private currentRoute: Leaflet.Polyline;
  private startMarker: Leaflet.Marker;
  private endMarker: Leaflet.Marker;

  constructor(private reqService: RequestService) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initMap();
    this.dataService.getData().subscribe(data => { this.getRoute(); });
  }

  private initMap(): void {
    this.map = Leaflet.map('map', {
      zoom: 15,
      center: new Leaflet.LatLng(42.3936964, -72.5311701)
    });

    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);
  }

  public getRoute(): void {
    this.reqService.getPath(this.dataService.getRequestBody()).subscribe(
      response => {
        this.drawRoute(response);
      },
      error => console.log("Error >>> " + error)
    );
  }

  private drawRoute(response): void {
    this.clearPrevRoute();

    console.log(response);

    for (var i = 0; i < response.data.routes.length; i++) {
      this.waypoints.push(new Leaflet.LatLng(response.data.routes[i][1], response.data.routes[i][0]));
    }

    this.startMarker = new Leaflet.Marker(this.waypoints[0]).addTo(this.map);
    this.endMarker = new Leaflet.Marker(this.waypoints[this.waypoints.length - 1]).addTo(this.map);
    this.currentRoute = new Leaflet.Polyline(this.waypoints, {
      color: 'red',
      weight: 3,
      opacity: 0.5,
      smoothFactor: 1
    }).addTo(this.map);
  }

  private clearPrevRoute(): void {
    if (this.currentRoute != null) this.map.removeLayer(this.currentRoute);
    if (this.startMarker != null) this.map.removeLayer(this.startMarker);
    if (this.endMarker != null) this.map.removeLayer(this.endMarker);
    this.waypoints = [];
  }
}