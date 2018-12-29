import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { AppService } from "./app.service";
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { fakeMasterBackendProvider } from './master/master-fake.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [    
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    DataTableModule,
    FormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
  ],
  providers: [AppService, fakeMasterBackendProvider],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
