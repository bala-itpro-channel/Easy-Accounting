import { throwError as observableThrowError, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
	private apiUrl: string = '';

	constructor(
		private http: HttpClient) {
		this.apiUrl = environment.apiUrl + '/currency';
	}

	getCurrencies(): Observable<any> {
		return this.http
			.get(`${this.apiUrl}`).pipe(
				map((response: Response) => response),
				catchError((error: any) => observableThrowError(error)), )
	}

	getCurrency(id): Observable<any> {
		return this.http
			.get(`${this.apiUrl}/${id}`).pipe(
				map((response: Response) => response),
				catchError((error: any) => observableThrowError(error)), )
	}

	updateCurrency(currency): Observable<any> {
		return this.http
			.put(`${this.apiUrl}`, currency).pipe(
				map((response: Response) => response),
				catchError((error: any) => observableThrowError(error)), )
	}

	createCurrency(currency): Observable<any> {
		return this.http
			.post(`${this.apiUrl}`, currency, {
				headers: new HttpHeaders()
					.set("Content-Type", "application/json")
			}).pipe(
				map((response: Response) => response),
				catchError((error: any) => observableThrowError(error)), )
	}

	deleteCurrency(id): Observable<any> {
		return this.http
			.delete(`${this.apiUrl}/${id}`, {
				headers: new HttpHeaders()
					.set("Content-Type", "application/json")
			}).pipe(
				map((response: Response) => response),
				catchError((error: any) => observableThrowError(error)), )
  }
  
  // currencies: Array<any> = [];
  
  // constructor() { 
  //     this.loadCurrencies();
  // }

  // addCurrency( data ) {
  //   let id = this.currencies[this.currencies.length-1]["id"] + 1; 
  //   data["id"] = id;
  //   this.currencies.push(data);
  // }

  // updateCurrency( data ) {
  //   let ind = this.currencies.findIndex((itm)=>{
  //     return itm.id == data.id;
  //   })

  //   this.currencies[ind]["id"] = data.id;
  //   this.currencies[ind]["code"] = data.code;
  //   this.currencies[ind]["name"] = data.name;
  //   this.currencies[ind]["base"] = data.base;
  // }

  // loadCurrencies() {
  //   this.currencies = [      
  //       {
  //         id: 1,
  //         code: 'SCR',
  //         name: 'Seychelles Rupees',
  //         base: true
  //       },
  //       {
  //         id: 2,
  //         code: 'USD',
  //         name: 'US Dollar',
  //         base: false
  //       },
  //       {
  //         id: 3,
  //         code: 'MRU',
  //         name: 'Mauritanian ouguiya',
  //         base: false
  //       },
  //       {
  //         id: 4,
  //         code: 'GBP',
  //         name: 'Pound sterling',
  //         base: false
  //       },
  //       {
  //         id: 5,
  //         code: 'ZAR',
  //         name: 'South African rand',
  //         base: false
  //       },
  //       {
  //         id: 6,
  //         code: 'TRY',
  //         name: 'Turkish lira',
  //         base: false
  //       },
  //       {
  //         id: 7,
  //         code: 'INR',
  //         name: 'Indian Rupee',
  //         base: false
  //       },
  //       {
  //         id: 8,
  //         code: 'ZAR',
  //         name: 'South African rand2',
  //         base: false
  //       },
  //       {
  //         id: 9,
  //         code: 'TRY',
  //         name: 'Turkish lira2',
  //         base: false
  //       },
  //       {
  //         id: 10,
  //         code: 'INR',
  //         name: 'Indian Rupee2',
  //         base: false
  //       }
  //     ];  
  // }

}