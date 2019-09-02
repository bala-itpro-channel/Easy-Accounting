import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Easy Accounting';

  constructor(private router: Router, public service: AppService) {
  }

  logout() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
      this.router.navigate(['login'])
    }
  }
}

