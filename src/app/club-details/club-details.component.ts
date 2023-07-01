import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ClubService } from '../club.service';
import { Club } from '../club';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule],
  template: ` <p>club-details works! {{ clubId }}</p> `,
  styleUrls: ['./club-details.component.css'],
})
export class ClubDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  clubId = -1;
  constructor() {
    this.clubId = Number(this.route.snapshot.params['id']);
  }
}
