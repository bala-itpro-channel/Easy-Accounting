import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-dialog',
  templateUrl: './currency-dialog.component.html',
  styleUrls: ['./currency-dialog.component.scss']
})
export class CurrencyDialogComponent implements OnInit {

  isAddOperation: boolean = false;
  currency = {
    id: 0,
    code: '',
    name: '',
    base: false,
    operation: ''
  }
  constructor() { }

  ngOnInit() {
    
  }

  saveCurrency(currency) {

  }
}
