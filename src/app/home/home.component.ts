import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Club } from '../club';
import { ClubService } from '../club.service';
import { LadderHeaderComponent } from '../ladder-header/ladder-header.component';
import { AflClubComponent } from '../afl-club/afl-club.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    LadderHeaderComponent,
    AflClubComponent,
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clubLadder: Club[] = [];
  clubService: ClubService = inject(ClubService);
  meta: Meta = inject(Meta);

  constructor() {
    this.clubService.getAllClubs().subscribe((clubLadder: Club[]) => {
      this.clubLadder = clubLadder;
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
