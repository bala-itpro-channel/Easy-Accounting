import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutes } from './app-routing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DataTableModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { fakeMasterBackendProvider } from './master/master-fake.service';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from './material-module';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './master/location/location.component';
import { StoreModule } from '@ngrx/store';
import { LocationReducer } from './reducers/location-reducers';
import { EffectsModule } from '@ngrx/effects';
import { LocationEffects } from './effects/location-effect';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot({locations: LocationReducer}),
    EffectsModule.forRoot([LocationEffects])
  ],
  exports: [
  ],
  providers: [AppService, fakeMasterBackendProvider],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
