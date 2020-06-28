import { HomeComponent } from './home/home.component';
import { NgModule, Injectable } from '@angular/core';
import { RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, PreloadingStrategy } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { LoginComponent } from './login/login.component';
import { LocationComponent } from './master/location/location.component';
import { CustomPreloadStrategy } from './custom-preload-strategy';

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
        component:   HomeComponent
    }, {
        path: 'master',
        loadChildren: () => import('./master/master.module').then(m => m.MasterModule),
        canActivate: [AuthGuard],
        data: { preload: true, delay: 6000 }
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
        RouterModule.forRoot(
            AppRoutes,
            {
              enableTracing: true,
              preloadingStrategy: CustomPreloadStrategy
              // preloadingStrategy: PreloadAllModules
            }
        )
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

