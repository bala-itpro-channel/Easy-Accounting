import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AuthResolverService implements Resolve<any> {
  constructor(private http: HttpClient) { }

  /**
   * resolve method
   * @param route
   * @param state
   */
  resolve(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    // const userName = route.params['userName'];
    // const url = `https://some-end-points.com/validate/${userName}`;
    // return this.http.get(url);
    const isValidUser: boolean = localStorage.getItem('authenticated').toLowerCase() == 'true' ? true : false;
    return of( isValidUser );
  }

}

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor(private http: HttpClient) { }

    public authenticate(userName: string, password: string) {
        const isValidUser = (userName === password);
        localStorage.setItem('authenticated', isValidUser.toString());

        return isValidUser;
    }
}
