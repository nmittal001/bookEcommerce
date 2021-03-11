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

  get(urlString: string): Observable<any> {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    this.url = proxyUrl + urlString;
    return this.http.get(this.url, this.httpOptions);
  }
}
