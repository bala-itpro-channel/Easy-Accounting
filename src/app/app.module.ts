import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { JournalComponent } from './gl/journal/journal.component';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from 'primeng/primeng';
import { DemoMaterialModule } from './material-module';
import { DeleteDialogComponent } from './shared/dialog/delete/delete.component';
import { FormsModule } from '@angular/forms';
import { AppService } from "./app.service";
import { MasterModule } from './master/master.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DeleteDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    DataTableModule,
    DemoMaterialModule,
    FormsModule,
    MasterModule
  ],
  exports: [
    DeleteDialogComponent,
    DemoMaterialModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
