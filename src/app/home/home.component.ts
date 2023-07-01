import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AflClubComponent } from '../afl-club/afl-club.component';
import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  AflClubComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by club" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-afl-club
        *ngFor="let club of clubLadder"
        [club]="club"
      ></app-afl-club>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clubLadder: Club[] = [];
  clubService: ClubService = inject(ClubService);

  constructor() {
    this.clubLadder = this.clubService.getAllClubs();
  }

  /* aflClub: Club = {
    logo: '/wp-content/themes/squiggle/assets/images/Richmond.png',
    id: 14,
    debut: 1908,
    name: 'Richmond',
    abbrev: 'RIC',
  }; */
}
