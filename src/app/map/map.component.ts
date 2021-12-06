import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  options: Leaflet.MapOptions = {
    layers: getLayers(),
    zoom: 12,
    center: new Leaflet.LatLng(42.3936964, -72.5311701)
  };

  constructor() { }

  ngOnInit(): void {
  }

}

export const getLayers = (): Leaflet.Layer[] => {
  return [
    new Leaflet.TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    } as Leaflet.TileLayerOptions),
    //Leaflet.layerGroup(getMarkers()),
    getRouting(),
  ] as Leaflet.Layer[];
};

export const getMarkers = (): Leaflet.Marker[] => {
  return [
    new Leaflet.Marker(new Leaflet.LatLng(42.3936964, -72.5311701), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/point-marker-1.svg',
      }),
      title: 'Workspace'
    } as Leaflet.MarkerOptions),
    new Leaflet.Marker(new Leaflet.LatLng(42.3976964, -72.5341701), {
      icon: new Leaflet.Icon({
        iconSize: [50, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/point-marker-2.svg',
      }),
      title: 'Riva'
    } as Leaflet.MarkerOptions),
  ] as Leaflet.Marker[];
};

export const getRoutes = (): Leaflet.Polyline[] => {
  return [
    new Leaflet.Polyline([
      new Leaflet.LatLng(42.3936964, -72.5311701),
      new Leaflet.LatLng(42.3976964, -72.5341701),
    ] as Leaflet.LatLng[], {
      color: '#0d9148'
    } as Leaflet.PolylineOptions)
  ] as Leaflet.Polyline[];
};

export const getRouting = (): Leaflet.Routing.Control => {
  return new Leaflet.Routing.Control({
    waypoints: [
      new Leaflet.LatLng(42.3936964, -72.5311701),
      new Leaflet.LatLng(42.3976964, -72.5341701),
    ]
  })
};