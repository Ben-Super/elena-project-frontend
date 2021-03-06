import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Coordinate } from '../templates/coordinate';
import { SidenavData } from '../templates/sidenavdata';

/*
 * This is the component responsible for the user input fields in the sidenav
 */
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
  weight: number;
  isMin: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fromLat.setValue(42.3936964);
    this.fromLon.setValue(-72.5311701);
    this.toLat.setValue(42.3976964);
    this.toLon.setValue(-72.5351701);
    this.weight = 1.0;
  }

  // Verifies that the coordinates are valid, then sends the updated data to the DataService
  getPath() {
    if(this.fromLat.valid && this.fromLon.valid && this.toLat.valid && this.toLon.valid) {
      let data = new SidenavData();
      data.setPointA(new Coordinate(this.fromLat.value, this.fromLon.value));
      data.setPointB(new Coordinate(this.toLat.value, this.toLon.value));
      data.setWeight(this.weight);
      data.setIsMin(this.isMin);
      this.dataService.setData(data);
    } else {
      alert('Please Input valid coordinates!');
    }
  }
}
