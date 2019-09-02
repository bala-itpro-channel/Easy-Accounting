import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppService {

  currencies: Array<any> = [];
  
  isAuthenticatedUser(): boolean {
    // TODO: Keep this logic in user service (singleton)
    return localStorage.getItem('authenticated') && localStorage.getItem('authenticated') === 'true';
  }
}