import { Component } from '@angular/core';

@Component({
  selector: 'app-master',
  template: `<div>This is master page title</div><router-outlet></router-outlet>`,
  styleUrls: []
})
export class MasterComponent {
  title = 'Master';
}
