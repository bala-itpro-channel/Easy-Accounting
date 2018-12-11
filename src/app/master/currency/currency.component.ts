import { Component, OnInit } from '@angular/core';
import { CurrencyDialogComponent } from './dialog/currency-dialog/currency-dialog.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Array<any> = [];
  selectedCurrency: any;

  constructor(private dialog: MatDialog) { }

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

  onRowSelect(event) {
    console.log('Before dialog');
    console.log(event);
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      width: '250px',
      data: this.selectedCurrency
    });
    console.log('After dialog');
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
