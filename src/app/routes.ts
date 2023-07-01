import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClubDetailsComponent } from './club-details/club-details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home Page',
  },
  {
    path: 'details/:id',
    component: ClubDetailsComponent,
    title: 'Club Details',
  },
];

export default routeConfig;
