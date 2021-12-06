import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Coordinate } from '../templates/coordinate';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public observable;
  public pointA: Coordinate;
  public pointB: Coordinate;

  constructor() {
    this.observable = new Subject();
    this.pointA = new Coordinate(0, 0);
    this.pointB = new Coordinate(0, 0);
  }
}
