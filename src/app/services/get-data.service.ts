import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { DataInterface } from '@data/newThings';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  private apiURL = 'http://localhost:5000/newThings';

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
      window.alert(
        'It seems that back-end data is not available. Please run in your console `npm run server`'
      );
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }

    return throwError(
      () =>
        new Error(
          'Something bad happened. It seems that back-end data is not available. Please run in your console `npm run server`'
        )
    );
  }

  constructor(private http: HttpClient) {}

  getData(): Observable<DataInterface[]> {
    return this.http
      .get<DataInterface[]>(this.apiURL)
      .pipe(catchError(this.handleError));
  }
}
