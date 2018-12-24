import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const AppRoutes = [
    {
        path: 'home',
        pathMatch: 'full',
        component:   HomeComponent
    },
    {
        path: 'master',
        loadChildren: './master/master.module#MasterModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },    
    {
        path: '**',
        redirectTo: 'home'
    },
];

@NgModule({
    imports: [
      RouterModule.forRoot(AppRoutes)
    ],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule { }