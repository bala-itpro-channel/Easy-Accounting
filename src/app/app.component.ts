import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Easy Accounting';

  constructor(
    private router: Router,
    public service: AppService,
    translate: TranslateService
  ) {
    // Samples: https://www.npmjs.com/package/@ngx-translate/core/v/12.1.2
    translate.addLangs(['en', 'fr', 'ta']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ta/) ? browserLang : 'en');

    console.log('Browser Lang =', browserLang);
    console.log('Navigator Lang =', navigator.language);
    console.log('Current Lang =', translate.currentLang);
  }

  logout() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
      this.router.navigate(['login']);
    }
  }
}

