import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';
import { SidenavData } from '../templates/sidenavdata';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private subject = new Subject<SidenavData>();
  private data: SidenavData;

  constructor() {
    this.data = new SidenavData();
  }

  public setData(data: SidenavData): void {
    this.data = data;
    this.subject.next(this.data);
  }

  public getData(): Observable<SidenavData> {
    return this.subject.asObservable();
  }

  public getRequestBody() {
    return this.data.asJSON();
  }
}
