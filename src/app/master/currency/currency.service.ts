import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private apiUrl = '';

  constructor(
    private http: HttpClient) {
    this.apiUrl = `${environment.apiUrl}/currency`;
  }

  getCurrencies(): Observable<any> {
    return this.http
      .get(this.apiUrl).pipe(
        map((response: Response) => response),
        catchError((error: any) => observableThrowError(error))
      );
  }

  getCurrency(id): Observable<any> {
    return this.http
      .get(`${this.apiUrl}/${id}`).pipe(
        map((response: Response) => response),
        catchError((error: any) => observableThrowError(error))
      );
  }

  updateCurrency(currency): Observable<any> {
    return this.http
    .put(this.apiUrl, currency).pipe(
      map((response: Response) => response),
      catchError((error: any) => observableThrowError(error))
    );
  }

  createCurrency(currency): Observable<any> {
    return this.http
      .post(this.apiUrl, currency, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map((response: Response) => response),
        catchError((error: any) => observableThrowError(error))
    );
  }

  deleteCurrency(id): Observable<any> {
    return this.http
      .delete(`${this.apiUrl}/${id}`, {
        headers: new HttpHeaders().set('Content-Type', 'application/json')
      }).pipe(
        map((response: Response) => response),
        catchError((error: any) => observableThrowError(error))
      );
  }
}