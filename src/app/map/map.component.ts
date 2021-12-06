import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';
import { DataService } from '../services/data.service';
import { Coordinate } from '../templates/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() dataService: DataService;

  private map: Leaflet.Map;
  private routingControl = null;
  // will eventually store the entire custom route
  private routes = [];

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.initMap();
    this.dataService.getData().subscribe(data => { this.drawRoute(data.getPointA(), data.getPointB()); });
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

  public drawRoute(pointA: Coordinate, pointB: Coordinate): void {
    if (this.routingControl != null) {
      this.map.removeControl(this.routingControl);
    }
    console.log("Drawing new route between coordinates:\n" + pointA.toString() + "\n" + pointB.toString());
    this.routingControl = Leaflet.Routing.control({
      waypoints: [
        new Leaflet.LatLng(pointA.lat, pointA.long),
        new Leaflet.LatLng(pointB.lat, pointB.long),
      ]
    }).addTo(this.map);
  }
}