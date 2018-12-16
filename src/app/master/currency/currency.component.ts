import { Component, OnInit } from '@angular/core';
import { CurrencyDialogComponent } from './dialog/currency-dialog/currency-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from './../../app.service';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Array<any> = [];
  selectedCurrency: any;

  constructor(private dialog: MatDialog, private appService: AppService) { }

  ngOnInit() {
    this.currencies = this.appService.currencies;
  }

  onRowSelect(event) {
  
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      width: '350px',
      // height: '400px',
      data: event ? this.selectedCurrency : {
        id: 0,
        code: '',
        name: '',
        base: false
      }
    });

    console.log('After dialog');
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  addCurrency() {
    this.onRowSelect(null);
  }

}
