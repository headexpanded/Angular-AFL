import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';
import { ClubService } from '../club.service';
import { LadderHeaderComponent } from '../ladder-header/ladder-header.component';
import { AflClubComponent } from '../afl-club/afl-club.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    LadderHeaderComponent,
    AflClubComponent,
    FooterComponent,
  ],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clubLadder: Club[] = [];
  clubService: ClubService = inject(ClubService);
  footerLegend =
    'Legend: # Rank, Pts Points, P Played, W Wins, D Draws, L Losses, % Percentage';

  constructor() {
    this.clubService.getAllClubs().subscribe((clubLadder: Club[]) => {
      this.clubLadder = clubLadder;
    });
  }
}
