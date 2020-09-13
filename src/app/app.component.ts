import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';
import {TranslateService} from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Easy Accounting';

  constructor(
    private router: Router,
    public service: AppService,
    private translate: TranslateService,
    private titleService: Title
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

  ngOnInit() {
    // this.titleService.setTitle( this.translate.getTranslation() );
  }

  logout() {
    if (localStorage.getItem('authenticated')) {
      localStorage.removeItem('authenticated');
      this.router.navigate(['login']);
    }
  }
}

