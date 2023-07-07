import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Club } from '../club';

@Component({
  selector: 'app-afl-club',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: 'afl-club.component.html',
  styleUrls: ['./afl-club.component.css'],
})
export class AflClubComponent {
  @Input() club!: Club;
}
