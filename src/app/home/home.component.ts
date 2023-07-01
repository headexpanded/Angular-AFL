import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,  RouterLink, RouterOutlet],
  templateUrl: './home.component.html',
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
    this.filteredClubList = this.clubLadder.filter((club) =>
      club?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  constructor() {
    this.clubService.getAllClubs().then((clubLadder: Club[]) => {
      this.clubLadder = clubLadder;
      this.filteredClubList = clubLadder;
    });
    this.filteredClubList = this.clubLadder;
  }
}
