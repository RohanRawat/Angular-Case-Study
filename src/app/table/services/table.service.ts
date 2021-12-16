import { Injectable } from '@angular/core';
import { Observable, throwError ,retry} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '../../interfaces/common';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private http: HttpClient) {}

  readonly API_BASE_PATH: string = 'https://fakestoreapi.com/users';
  public getUserListing(query?: any) {
    const reqUrl = this.API_BASE_PATH ;
       return this.http
        .get<Response>(reqUrl)
        .pipe(catchError((err: HttpErrorResponse) => this.handleError(err)));
    }
  

    private handleError(error: HttpErrorResponse) {
      if (error.status === 0) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong.
        console.error(
          `Backend returned code ${error.status}, body was: `, error.error);
      }
      // Return an observable with a user-facing error message.
      return throwError(
        'Something bad happened; please try again later.');
    }
}
