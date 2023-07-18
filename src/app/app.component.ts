import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-AFL';
  meta: Meta = inject(Meta);
  headerTitle = 'Ad-Free AFL Ladder';

  constructor() {
    this.meta.addTags([
      { name: 'description', content: 'An Ad-Free AFL Ladder' },
      {
        name: 'keywords',
        content:
          'AFL, AFL ladder, AFL ladder no ads, ad-free AFL ladder, ad free AFL, ad free AFL ladder, AFL ladder with no ads , AFL ladder without ads',
      },
      { name: 'charset', content: 'UTF-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'Angular-AFL' },
      {
        name: 'author',
        content: 'https://github.com/headexpanded/Angular-AFL',
      },
      { name: 'robots', content: 'all no-archive' },
    ]);
  }
}
