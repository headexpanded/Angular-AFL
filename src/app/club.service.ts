import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Club } from './club';

@Injectable({
  providedIn: 'root',
})
export class ClubService {

  // testing json data source: run json-server --watch
  url = 'http://localhost:3000/standings';

  // live json data source
  private standingsUrl = 'https://api.squiggle.com.au/?q=standings';
  private teamUrl = 'https://api.squiggle.com.au/?q=teams;team=';

  constructor(private http: HttpClient) {}

  getAllClubs(): Observable<Club[]> {
    return this.http
      .get<Club[]>(this.standingsUrl, {
        observe: 'body',
        responseType: 'json',
      })
      .pipe(map((data: any) => data.standings));
  }

  getClubById(id: number): Observable<Club | undefined> {
    const teamUrl = this.teamUrl + id;
    console.log(teamUrl)
    return this.http.get<Club>(teamUrl, {
      observe: 'body',
      responseType: 'json',
    })
      .pipe(map((data: any) => data.teams));
  }
}

