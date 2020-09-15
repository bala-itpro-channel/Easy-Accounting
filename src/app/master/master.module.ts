import { NgModule } from '@angular/core';

import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
// import { DataTableModule } from 'primeng/primeng';
import { TableModule } from 'primeng/table';
import { MaterialModule } from '../material-module';
import { CurrencyDialogComponent } from './currency/dialog/currency-dialog/currency-dialog.component';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master.router';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { locationReducer } from './reducers/location-reducers';

@NgModule({
  declarations: [
    CurrencyComponent,
    LocationComponent,
    CurrencyDialogComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    MaterialModule,
    FormsModule,
    MasterRoutingModule,
    StoreModule.forFeature('locations', locationReducer)
  ],
  providers: [
  ],
  bootstrap: [],
  exports: [],
  entryComponents: [CurrencyDialogComponent]
})
export class MasterModule { }
