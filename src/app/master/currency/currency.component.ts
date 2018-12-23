import { Component, OnInit } from '@angular/core';
import { CurrencyDialogComponent } from './dialog/currency-dialog/currency-dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AppService } from './../../app.service';
// import 'rxjs/add/observable/of';
// import { Observable, of } from 'rxjs/internal/Observable';

import {MatSnackBar} from '@angular/material';
import { DeleteDialogComponent } from './../../shared/dialog/delete/delete.component';

import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss']
})
export class CurrencyComponent implements OnInit {
  currencies: Array<any> = [];
  selectedCurrency: any;
  visible: any = true;

  constructor(private dialog: MatDialog, private appService: AppService, private snackbar: MatSnackBar) { }

  ngOnInit() {
    this.loadData().subscribe(resp=>{
      this.currencies = resp;
    });
  }

  loadData(): Observable<any> {
    return of(this.appService.currencies);
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
      console.log(result);
      if (result) {
        if (result.id == 0) {
          this.appService.addCurrency(result);

          this.snackbar.open('Added successfully', 'Close', 
          { 
            panelClass: ['snack-bar-color'],
            duration: 2000
          });
          // this.currencies.push(result);
          // this.loadData();

          // this.updateVisibility();
        }
        else {
          // this.appService.updateCurrency(result);  
          this.snackbar.open('Updated successfully', 'Close', 
          { 
            panelClass: ['snack-bar-color'],
            duration: 3000
          });
        }
      }
      // this.animal = result;
    });
  }

  addCurrency() {
    this.onRowSelect(null);
  }

  deleteItem(event, rowData) {
    // rowData
    //let sure = confirm('Are you sure you want to delete?');
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    let dialog = this.dialog.open(DeleteDialogComponent, dialogConfig);

    dialog.afterClosed().subscribe(result => {
      if (result) {
        console.log(rowData);
        let ind = this.currencies.findIndex((ite) => {
          return ite.id == rowData.id;
        });
        this.currencies.splice(ind, 1);
  
        this.snackbar.open('Deleted successfully', 'Close', 
            { 
              panelClass: ['snack-bar-color'],
              duration: 2000
            });
      }
    });

    // if (sure) {
    //   console.log(rowData);
    //   let ind = this.currencies.findIndex((ite) => {
    //     return ite.id == rowData.id;
    //   });
    //   this.currencies.splice(ind, 1);

    //   this.snackbar.open('Deleted successfully', 'Close', 
    //       { 
    //         panelClass: ['snack-bar-color'],
    //         duration: 3000
    //       });
    // }

    event.stopPropagation();
  }
}
