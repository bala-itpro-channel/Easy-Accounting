import { HomeComponent } from './home/home.component';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { LoginComponent } from './login/login.component';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor( public router: Router, private authService: AuthService) {}

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isAuthenticated = localStorage.getItem('authenticated') ? localStorage.getItem('authenticated') === 'true' : false;
        if (!isAuthenticated) {
            this.router.navigate(['login']);
        }

        return isAuthenticated;
    }
}


export const AppRoutes = [{
        path: 'login',
        pathMatch: 'full',
        component:   LoginComponent
    }, {
        path: 'home',
        pathMatch: 'full',
        component:   HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'master',
        loadChildren: './master/master.module#MasterModule',
        canActivate: [AuthGuard]
    }, {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    }, {
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
