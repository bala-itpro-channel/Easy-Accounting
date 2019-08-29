import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
import { MasterComponent } from './master.component';
import { AuthResolverService } from '../shared/services/auth.service';

const masterRoutes: Routes = [
    {
        path: '',
        component: MasterComponent 
    },
    {
        path: 'currency',
        component: CurrencyComponent,
        resolve: {
            user: AuthResolverService
        }
    },
    {
        path: 'location',
        component: LocationComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(masterRoutes)],
    exports: [RouterModule]
  })
export class MasterRoutingModule { }