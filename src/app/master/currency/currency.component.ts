import { Component, OnInit } from '@angular/core';
import { CurrencyDialogComponent } from './dialog/currency-dialog/currency-dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material';
import { AppService } from './../../app.service';
// import 'rxjs/add/observable/of';
// import { Observable, of } from 'rxjs/internal/Observable';
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

  constructor(private dialog: MatDialog, private appService: AppService) { }

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

          this.loadData();

          // this.updateVisibility();
        }
        else {
          this.appService.updateCurrency(result);  
        }
      }
      // this.animal = result;
    });
  }

  updateVisibility(): void {
    this.visible = false;
    setTimeout(() => this.visible = true, 0);
  }

  addCurrency() {
    this.onRowSelect(null);
  }

  deleteItem(event, rowData) {
    // rowData
    let sure = confirm('Are you sure you want to delete?');

    if (sure) {
      console.log(rowData);
      let ind = this.currencies.findIndex((ite) => {
        return ite.id == rowData.id;
      });
      this.currencies.splice(ind, 1);

      // this.updateVisibility();
    }

    event.stopPropagation();
  }
}
