import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';

@Component({
  selector: 'app-afl-club',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <span>{{ club.rank }}</span>
    <span>{{ club.name }}</span>
    <span>{{ club.pts }}</span>
    <span>{{ club.played }}</span>
    <span>{{ club.wins }}</span>
    <span>{{ club.draws }}</span>
    <span>{{ club.losses }}</span>
    <span>{{ club.percentage }}</span>
  `,
  styleUrls: ['./afl-club.component.css'],
})
export class AflClubComponent {
  @Input() club!: Club;
}
