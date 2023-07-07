import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';

@Component({
  selector: 'app-afl-club',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
    <div class="club-wrapper">
      <div class="club-ladder-data">
      
          <a [routerLink]="['/details', club.id]">
            <div class="club-rank">
              <span>{{ club.rank }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-logo"><img [src]="club.logo" alt="Logo" /></div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-name">
              <span translate="no">{{ club.name }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-points">
              <span>{{ club.pts }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-played">
              <span>{{ club.played }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-wins">
              <span>{{ club.wins }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-draws">
              <span>{{ club.draws }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-losses">
              <span>{{ club.losses }}</span>
            </div>
          </a>
          <a [routerLink]="['/details', club.id]">
            <div class="club-percentage">
              <span>{{ club.percentage | number : '1.2-2' }}</span>
            </div>
          </a>
      
      </div>
    </div>
  `,
  styleUrls: ['./afl-club.component.css'],
})
export class AflClubComponent {
  @Input() club!: Club;
}
