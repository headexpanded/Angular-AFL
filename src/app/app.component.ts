import { Component } from '@angular/core';

import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
  template: `<main>
    <header></header>
    <section>
      <app-home></app-home>
    </section>
  </main> `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular-AFL';
}
