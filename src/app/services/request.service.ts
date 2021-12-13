import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PathData } from '../templates/pathdata';

/*
 * This service handles http requests to the backend
 */
@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private backendURL = 'http://104.224.183.111:8081/getElenaRoutes';

  constructor(private http: HttpClient) { }

  public getPath(body): Observable<PathData> {
    return this.http.post<PathData>(this.backendURL, body);
  }
}
