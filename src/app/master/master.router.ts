import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency/currency.component';
import { LocationComponent } from './location/location.component';
import { MasterComponent } from './master.component';

const masterRoutes: Routes = [{
    path: '',
    component: MasterComponent,
        // children: [
        //     // {
        //     //     path: '',
        //     //     component: CurrencyComponent,
        //     // },
        //     {
        //         path: 'currency',
        //         component: CurrencyComponent,
        //     },
        //     {
        //         path: 'location',
        //         component: LocationComponent
        //     }
        // ]
    },
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // }
];


@NgModule({
    imports: [RouterModule.forChild(masterRoutes)],
    exports: [RouterModule]
  })
export class MasterRoutingModule { }