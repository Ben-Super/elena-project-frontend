import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'elena-project-frontend';

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService = new DataService();
  }
}
