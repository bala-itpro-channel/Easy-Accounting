import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { CurrencyComponent } from './master/currency/currency.component';
import { LocationComponent } from './master/location/location.component';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from 'primeng/primeng';
import { DemoMaterialModule } from './material-module';
import { CurrencyDialogComponent } from './master/currency/dialog/currency-dialog/currency-dialog.component';

import { FormsModule } from '@angular/forms';
import { AppService } from "./app.service";

@NgModule({
  declarations: [
    AppComponent,
    JournalComponent,
    CurrencyComponent,
    LocationComponent,
    HomeComponent,
    CurrencyDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DataTableModule,
    DemoMaterialModule,
    FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: [CurrencyDialogComponent]
})
export class AppModule { }
