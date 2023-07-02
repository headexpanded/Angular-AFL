import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { Club } from './club';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  // testing json data source
  url = 'http://localhost:3000/standings';
  // live json data source
  standingsUrl = 'https://api.squiggle.com.au/?q=standings';

  constructor(private http: HttpClient) {}

  getAllClubs(): Observable<Club[]> {
    return this.http.get<Club[]>(this.standingsUrl, {
      observe: 'body',
      responseType: 'json',
    }).pipe(map((data:any)=>data.standings));
  }

  async getClubById(id: number): Promise<Club | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
