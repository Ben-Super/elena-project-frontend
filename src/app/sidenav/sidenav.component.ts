import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input() dataService: DataService;

  fromLat = new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]);
  fromLon = new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)]);
  toLat = new FormControl('', [Validators.required, Validators.min(-90), Validators.max(90)]);
  toLon = new FormControl('', [Validators.required, Validators.min(-180), Validators.max(180)]);

  constructor() { }

  ngOnInit(): void { }

  getPath() {
    if(this.fromLat.valid && this.fromLon.valid && this.toLat.valid && this.toLon.valid) {
      this.dataService.observable.next();
      console.log(this.dataService.pointA.lat, this.dataService.pointA.long);
      console.log(this.dataService.pointB.lat, this.dataService.pointB.long);
    } else {
      alert('Please Input Valid Coordinates!');
    }
  }
}
