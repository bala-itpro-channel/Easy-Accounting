import { HomeComponent } from './home/home.component';

export const AppRoutes = [
    {
        path: 'home',
        pathMatch: 'full',
        component:   HomeComponent
    },  
    // {
    //     path: 'master',
    //     pathMatch: 'full',
    //     loadChildren: './master/master.module#MasterModule'
    // },
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

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { AppComponent } from './app.component';
// import { JournalComponent } from './gl/journal/journal.component';
// import { CurrencyComponent } from './master/currency/currency.component';
// import { LocationComponent } from './master/location/location.component';
// import { HomeComponent } from './home/home.component';

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomeComponent
//   },
//   {
//       path: '',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   },
//   {
//       path: '**',
//       redirectTo: '/home',
//       pathMatch: 'full'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
