import { NgModule } from '@angular/core';

import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
import { DataTableModule } from 'primeng/primeng';
import { MaterialModule } from '../material-module';
import { CurrencyDialogComponent } from './currency/dialog/currency-dialog/currency-dialog.component';
import { FormsModule } from '@angular/forms';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master.router';
import { CommonModule } from '@angular/common';
import { fakeMasterBackendProvider } from './master-fake.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CurrencyComponent,
    LocationComponent,
    CurrencyDialogComponent,
    MasterComponent
  ],
  imports: [
    CommonModule,
    DataTableModule,
    MaterialModule,
    FormsModule,
    MasterRoutingModule,
    // HttpClientModule,
  ],
  providers: [
    
  ],
  bootstrap: [],
  exports: [],
  entryComponents: [CurrencyDialogComponent]
})
export class MasterModule { }
