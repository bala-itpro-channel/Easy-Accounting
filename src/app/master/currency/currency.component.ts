import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Array<any> = [];
  constructor() { }

  ngOnInit() {
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
