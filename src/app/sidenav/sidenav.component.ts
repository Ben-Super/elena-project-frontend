import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Coordinate } from '../templates/coordinate';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  fromLat = new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]);
  fromLon = new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)]);
  toLat = new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]);
  toLon = new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)]);

  pointA: Coordinate<number>;
  pointB: Coordinate<number>;

  constructor() {
    this.pointA = new Coordinate<number>();
    this.pointB = new Coordinate<number>();
  }

  ngOnInit(): void {
    this.pointA.lat = 0;
    this.pointA.long = 0;
    this.pointB.lat = 0;
    this.pointB.long = 0;
  }

  getPath(){
    if(this.fromLat.status === 'VALID' && this.fromLon.status === 'VALID' && this.toLat.status === 'VALID' && this.toLon.status === 'VALID'){
      console.log(this.pointA.lat, this.pointA.long);
      console.log(this.pointB.lat, this.pointB.long);
    }
    else{
      alert('Please Input Valid Coordinates!')
    }
  }


}
