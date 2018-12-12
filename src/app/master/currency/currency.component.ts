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
    console.log('Before dialog');
    console.log(event);
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      width: '350px',
      height: '400px',
      data: this.selectedCurrency
    });
    console.log('After dialog');
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
