import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JournalComponent } from './journal/journal.component';
import { CurrencyComponent } from './master/currency/currency.component';
import { LocationComponent } from './master/location/location.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'currency',
    component: CurrencyComponent
  },
  {
    path: 'location',
    component: LocationComponent
  },
  {
    path: 'journal',
    component: JournalComponent
  },
  {
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
  },
  {
      path: '**',
      redirectTo: '/home',
      pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
