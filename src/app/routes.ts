import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Ad-Free AFL',
  },
  {
    path: 'details/:id',
    component: ClubDetailsComponent,
    title: 'Club Details',
  },
  {
    path: '**', redirectTo: ''
  }
];

export default routeConfig;
