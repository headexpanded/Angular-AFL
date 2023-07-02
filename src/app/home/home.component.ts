import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';
import { ClubService } from '../club.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: 'home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  clubLadder: Club[] = [];
  //clubService: ClubService = inject(ClubService);

  constructor(private clubService: ClubService) {
    this.clubService.getAllClubs().subscribe((clubLadder: Club[]) => {
      console.log(clubLadder);
      this.clubLadder = clubLadder;
    });
  }
}
