import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Club } from './club';
import { LogoService } from './logo.service';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  // testing json data source: run json-server --watch
  url = 'http://localhost:3000/standings';

  // live json data source
  private standingsUrl = 'https://api.squiggle.com.au/?q=standings';

  constructor(private http: HttpClient, private logoService: LogoService) {}

  private fetchStandings(): Observable<any> {
    return this.http.get(this.standingsUrl, {
      observe: 'body',
      responseType: 'json',
    });
  }

  getAllClubs(): Observable<Club[]> {
    return this.fetchStandings().pipe(
      map((data: any) => {
        const teams = this.logoService.addLogoToArray(data.standings);
        teams.forEach((club: Club) => {
          if (club.id === 9) {
            club.name = 'GWS Giants';
          }
        });
        return teams;
      })
    );
  }

  getClubById(id: number): Observable<Club | undefined> {
    return this.fetchStandings().pipe(
      map((data: any) => {
        const teams = this.logoService.addLogoToArray(data.standings);
        const club = teams.find((club: Club) => club.id === id);

        if (club && club.id === 9) {
          club.name = 'GWS Giants';
        }
        return club;
      })
    );
  }
}
