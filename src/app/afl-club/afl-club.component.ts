import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';

@Component({
  selector: 'app-afl-club',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <section class="listing">
      <a [routerLink]="['/details', club.id]">
        <h2 class="listing-heading">{{ club.name }}</h2>
        <p class="listing-location">Rank: {{ club.rank }}</p>
        <p class="listing-location">Points: {{ club.pts }}</p>
        <p class="listing-location">Played: {{ club.played }}</p>
        <p class="listing-location">Wins: {{ club.wins }}</p>
        <p class="listing-location">Losses: {{ club.losses }}</p>
        <p class="listing-location">Percentage: {{ club.percentage }}</p>
      </a>
    </section>
  `,
  styleUrls: ['./afl-club.component.css'],
})
export class AflClubComponent {
  @Input() club!: Club;
}
