import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageGetterService {
  dataSource: string = 'https://jsonplaceholder.typicode.com/albums/1/photos?_limit=10';

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:ban-types
  getImageJson(): Observable<Object> {
    return this.http.get(this.dataSource);
  }
}
