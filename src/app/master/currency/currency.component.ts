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
  visible: any = true;

  constructor(private dialog: MatDialog, private appService: AppService) { }

  ngOnInit() {
    this.loadData();  
  }

  loadData() {
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
      console.log(result);
      if (result) {
        if (result.id == 0) {
          this.appService.addCurrency(result);

          this.loadData();

          this.updateVisibility();
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

}
