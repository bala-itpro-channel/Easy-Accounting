import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  currencies: Array<any> = [];
  
  constructor() { 
      this.loadCurrencies();
  }

  loadCurrencies() {
    this.currencies = [      
        {
          id: 1,
          code: 'SCR',
          name: 'Seychelles Rupees',
          base: true
        },
        {
          id: 2,
          code: 'USD',
          name: 'US Dollar',
          base: false
        },
        {
          id: 3,
          code: 'MRU',
          name: 'Mauritanian ouguiya',
          base: false
        },
        {
          id: 4,
          code: 'GBP',
          name: 'Pound sterling',
          base: false
        },
        {
          id: 5,
          code: 'ZAR',
          name: 'South African rand',
          base: false
        },
        {
          id: 6,
          code: 'TRY',
          name: 'Turkish lira',
          base: false
        },
        {
          id: 7,
          code: 'INR',
          name: 'Indian Rupee',
          base: false
        }
      ];  
  }
}