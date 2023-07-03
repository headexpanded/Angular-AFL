import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="content">
      <h2>{{ club?.name }}</h2>
    <p>{{ club?.played }}</p>
    <p>{{ club?.wins }}</p>
    <p>{{ club?.draws }}</p>
    <p>{{ club?.losses }}</p>
    </div>
`,
  styleUrls: ['./club-details.component.css'],
})

export class ClubDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  clubService = inject(ClubService);
  club: Club | undefined;
  clubId = -1;
  
  constructor() {
    this.clubId = parseInt(this.route.snapshot.params['id'], 10);
    this.clubService.getClubById(this.clubId).subscribe((club) => {
      this.club = club;
    });
  }
}
