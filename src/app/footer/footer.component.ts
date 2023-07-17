import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Footer } from '../footer';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input()
  legend!: string;
  logo!: './public/github-1.svg';
}
