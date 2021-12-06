import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Coordinate } from '../templates/coordinate';
import { SidenavData } from '../templates/sidenavdata';

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

  ngOnInit(): void {
    this.fromLat.setValue(42.3936964);
    this.fromLon.setValue(-72.5311701);
    this.toLat.setValue(42.3976964);
    this.toLon.setValue(-72.5351701);
  }

  getPath() {
    if(this.fromLat.valid && this.fromLon.valid && this.toLat.valid && this.toLon.valid) {
      let data = new SidenavData();
      data.setPointA(new Coordinate(this.fromLat.value, this.fromLon.value));
      data.setPointB(new Coordinate(this.toLat.value, this.toLon.value));
      this.dataService.setData(data);
    } else {
      alert('Please Input valid coordinates!');
    }
  }
}
