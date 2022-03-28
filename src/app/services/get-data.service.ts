import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataInterface } from '@data/newThings';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private apiURL = 'http://localhost:5000/newThings';

  constructor(private http: HttpClient) {}

  getData(): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(this.apiURL);
  }
}
