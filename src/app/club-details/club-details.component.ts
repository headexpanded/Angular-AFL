import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css'],
})
export class ClubDetailsComponent implements OnInit {
  club: Club | undefined;
  clubId = -1;

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubService
  ) {}

  ngOnInit(): void {
    this.clubId = parseInt(this.route.snapshot.params['id'], 10);
    this.clubService.getClubById(this.clubId).subscribe((club) => {
      this.club = club;
    });
  }
}
