import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
import { DataTableModule } from 'primeng/primeng';
import { DemoMaterialModule } from '../material-module';
import { CurrencyDialogComponent } from './currency/dialog/currency-dialog/currency-dialog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MasterComponent } from './master.component';
import { MasterRoutingModule } from './master.router';

// const masterRoutes: Routes = [
//   {
//   path: 'master',
//   children: [
//       {
//         path: '',
//         component: MasterComponent
//       },
//       {
//          path: 'currency',
//          component: CurrencyComponent
//       },
//       {
//          path: 'location',
//          component: LocationComponent
//       }] 
//   }
// ];

@NgModule({
  declarations: [
    CurrencyComponent,
    LocationComponent,
    CurrencyDialogComponent,
    MasterComponent
  ],
  imports: [
    // BrowserModule,
    BrowserAnimationsModule,
    DataTableModule,
    DemoMaterialModule,
    FormsModule,
    MasterRoutingModule
    //RouterModule.forChild(masterRoutes)
  ],
  providers: [],
  bootstrap: [],
  exports: [],
  entryComponents: [CurrencyDialogComponent]
})
export class MasterModule { }
