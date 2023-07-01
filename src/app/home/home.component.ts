import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AflClubComponent } from '../afl-club/afl-club.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AflClubComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by club" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-afl-club></app-afl-club>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {}
