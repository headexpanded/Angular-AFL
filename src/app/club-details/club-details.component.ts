import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../club.service';
import { Club } from '../club';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section class="listing-description">
        <h2 class="listing-heading">{{ club?.name }}</h2>
      </section>
    </article>
  `,
  styleUrls: ['./club-details.component.css'],
})
export class ClubDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  clubService = inject(ClubService);
  club: Club | undefined;
  clubId = -1;
  constructor() {
    const clubId = Number(this.route.snapshot.params['id']);
    this.club = this.clubService.getClubById(clubId);
  }
}
