import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Club } from '../club';
import { ClubGames } from '../club-games';
import { ClubService } from '../club.service';
import { ClubDetailsHeaderComponent } from '../club-details-header/club-details-header.component';

@Component({
  selector: 'app-club-details',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, ClubDetailsHeaderComponent],
  templateUrl: './club-details.component.html',
  styleUrls: ['./club-details.component.css'],
})
export class ClubDetailsComponent implements OnInit {
  club: Club | undefined;
  clubGames: ClubGames[] = [];
  clubId = -1;
  meta: Meta = inject(Meta);

  constructor(
    private route: ActivatedRoute,
    private clubService: ClubService
  ) {}

  ngOnInit(): void {
    this.clubId = parseInt(this.route.snapshot.params['id'], 10);
    this.clubService.getClubById(this.clubId).subscribe((club) => {
      this.club = club;
    });
    this.clubService.getClubGamesById(this.clubId).subscribe((clubGames) => {
      this.clubGames = clubGames;
    });
    this.meta.addTags([
      { name: 'description', content: 'An Ad-Free AFL Ladder' },
      {
        name: 'keywords',
        content:
          'AFL, AFL ladder, AFL ladder no ads, ad-free AFL ladder, ad free AFL, ad free AFL ladder, AFL ladder with no ads , AFL ladder without ads',
      },
    ]);
  }
}
