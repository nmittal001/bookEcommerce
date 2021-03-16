import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {
  url: string;

  httpOptions = {
    headers: new HttpHeaders().set('Content-Type', 'application/json').set('responseType', 'json'),
  };

  constructor(private http: HttpClient) {
  }

  get(query): Observable<any> {
    const url = `https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=${query.payload}`;
    return this.http.get(url, this.httpOptions);
  }
}
