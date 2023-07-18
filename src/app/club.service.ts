import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { env} from '@environments/env';

import { Club } from './club';
import { LogoService } from './logo.service';
import { ClubGames } from './club-games';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  
  constructor(private http: HttpClient, private logoService: LogoService) {}

  private fetchStandings(): Observable<any> {
    return this.http.get(env.standingsUrl, {
      observe: 'body',
      responseType: 'json',
    });
  }

  private fetchClubData(teamId: number): Observable<any> {
    return this.http.get(`${env.clubDataUrl};team=${teamId}`, {
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

  getClubGamesById(id: number): Observable<ClubGames[]> {
    return this.fetchClubData(id).pipe(
      map((data: any) => {
        const games = this.logoService.addLogoToArray(data.games);
        const clubGames = games.filter(
          (game: any) => game.ateamid === id || game.hteamid === id
        );
        clubGames.forEach((game: any) => {
          if (game.hteamid === 9) {
            game.hteam = 'GWS Giants';
          }
          if (game.ateamid === 9) {
            game.ateam = 'GWS Giants';
          }
          if (game.venue === 'Sydney Showground') {
            game.venue = 'Showgrounds';
          }
        })

        return clubGames;
      })
    );
  }
}
