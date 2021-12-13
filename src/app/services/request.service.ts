import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PathData } from '../templates/pathdata';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private backendURL = 'http://104.224.183.111:8081/get2dShortestPath';

  constructor(private http: HttpClient) { }

  public getPath(body): Observable<PathData> {
    return this.http.post<PathData>(this.backendURL, body);
  }
}
