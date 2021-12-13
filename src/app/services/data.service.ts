import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SidenavData } from '../templates/sidenavdata';

/*
 * This service is used to share inputted user data between components
 */
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<SidenavData>();
  private data: SidenavData;

  constructor() {
    this.data = new SidenavData();
  }

  // Updates the data and notifies observers
  public setData(data: SidenavData): void {
    this.data = data;
    this.subject.next(this.data);
  }

  // Returns an observable of this class' data
  // The observer pattern is used here to link the map and sidenav components
  public getData(): Observable<SidenavData> {
    return this.subject.asObservable();
  }

  // Returns the SidenavData in JSON format
  public getRequestBody() {
    return this.data.asJSON();
  }
}
