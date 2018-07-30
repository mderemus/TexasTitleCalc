import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) {

  }


  GetHomeMessage() {
    return this.http.get('api/default');
  }

  GetAPIMessage() {
    return this.http.get('api/blog');
  }

}