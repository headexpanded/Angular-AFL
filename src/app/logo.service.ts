import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogoService {
  addLogoToArray(clubList: any[]): any[] {
    return clubList.map((team) => {
      const teamId = team.id;
      const logoPath = './assets/logos/' + teamId + '.png';
      return { ...team, logo: logoPath };
    });
  }
}
