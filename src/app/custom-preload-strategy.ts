import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, timer, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CustomPreloadStrategy implements PreloadingStrategy {
    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data.preload) {
            this.preloadedModules.push(route.path);
            if (route.data.delay) {
                return timer(route.data.delay).pipe(flatMap(() => load()));
            } else {
                return load();
            }
        } else {
            return of(null);
        }
    }
}
