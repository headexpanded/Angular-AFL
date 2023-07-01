import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AflClubComponent } from '../afl-club/afl-club.component';
import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AflClubComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by club" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      <app-afl-club
        *ngFor="let club of filteredClubList"
        [club]="club"
      ></app-afl-club>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clubLadder: Club[] = [];
  filteredClubList: Club[] = [];
  clubService: ClubService = inject(ClubService);

  filterResults(text: string) {
    if (!text) {
      this.filteredClubList = this.clubLadder;
    }
    this.filteredClubList = this.clubLadder.filter(club =>club?.name.toLowerCase().includes(text.toLowerCase()));
    
  }

  constructor() {
    this.clubLadder = this.clubService.getAllClubs();
    this.filteredClubList = this.clubLadder;
  }

  /* aflClub: Club = {
    logo: '/wp-content/themes/squiggle/assets/images/Richmond.png',
    id: 14,
    debut: 1908,
    name: 'Richmond',
    abbrev: 'RIC',
  }; */
}
