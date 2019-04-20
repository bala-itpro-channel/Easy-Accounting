import { Component, OnInit } from '@angular/core';
import { CurrencyDialogComponent } from './dialog/currency-dialog/currency-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AppService } from './../../app.service';

import {MatSnackBar} from '@angular/material';
import { DeleteDialogComponent } from './../../shared/dialog/delete/delete.component';

import { Observable, of } from 'rxjs';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Array<any> = [];
  selectedCurrency: any;
  visible: any = true;

  constructor(
    private dialog: MatDialog,
    private currencyService: CurrencyService,
    private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.currencyService.getCurrencies().subscribe(resp=>{
      this.currencies = resp;
    });
  }

  onRowSelect(event) {
    if (event) {
      this.currencyService.getCurrency(this.selectedCurrency.id)
      .subscribe(result=>{
        this.showDialog(result);
      })
    }
    else {
      this.showDialog(null);
    }
  }

  showDialog(currency): void {
    const dialogRef = this.dialog.open(CurrencyDialogComponent, {
      width: '350px',
      data: currency ? currency : {
        id: 0,
        code: '',
        name: '',
        base: false
      }
    });

    console.log('After dialog');
    
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        if (result.id == 0) {
          this.currencyService.createCurrency(result).subscribe(result=>{
            this.snackbar.open('Added successfully', 'Close', 
            { 
              panelClass: ['snack-bar-color'],
              duration: 2000
            });
            this.currencies.push(result);
          })

         
        }
        else {
          // this.appService.updateCurrency(result);  
          this.currencyService.updateCurrency(result)
            .subscribe(result=>{
              this.selectedCurrency.code = result.code;
              this.selectedCurrency.name = result.name;
              this.selectedCurrency.base = result.base;
              this.snackbar.open('Updated successfully', 'Close', 
              { 
                panelClass: ['snack-bar-color'],
                duration: 3000
              });    
            })
        }
      }
    });
  }
  
  addCurrency() {
    this.onRowSelect(null);
  }

  deleteItem(event, rowData) {
    // rowData
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialog = this.dialog.open(DeleteDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(rowData);
        
        this.currencyService.deleteCurrency(rowData.id)
        .subscribe(result=>{
          let ind = this.currencies.findIndex((ite) => {
            return ite.id == rowData.id;
          });
          this.currencies.splice(ind, 1);

          this.snackbar.open('Deleted successfully', 'Close', 
            { 
              panelClass: ['snack-bar-color'],
              duration: 2000
            });
        })
        
      }
    });

    event.stopPropagation();
  }

}
