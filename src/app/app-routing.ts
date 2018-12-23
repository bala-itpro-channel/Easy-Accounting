import { HomeComponent } from './home/home.component';

export const AppRoutes = [
    {
        path: 'home',
        pathMatch: 'full',
        component:   HomeComponent
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
