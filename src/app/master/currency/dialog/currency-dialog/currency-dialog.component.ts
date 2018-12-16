import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-currency-dialog',
  templateUrl: './currency-dialog.component.html',
  styleUrls: ['./currency-dialog.component.scss']
})
export class CurrencyDialogComponent implements OnInit {

  isAddOperation: boolean = false;
  currency: any = {
    id: 0,
    code: '',
    name: '',
    base: false
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { 
    console.log('constructor');
  }

  ngOnInit() {
    // if (this.data) {
    //   this.currency = { id: this.data.id, code: this.data.code, name: this.data.name, base: this.data.base}
    // } else {
    //   this.currency = {
    //     id: 0,
    //     code: '',
    //     name: '',
    //     base: false
    //   }
    // }
  
    console.log('constructor 1');
  }

  saveCurrency(currency) {

  }
}
