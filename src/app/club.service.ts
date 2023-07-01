import { Injectable } from '@angular/core';
import { Club } from './club';

@Injectable({
  providedIn: 'root',
})
export class ClubService {
  url = 'http://localhost:3000/standings';

  async getAllClubs(): Promise<Club[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getClubById(id: number): Promise<Club | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  constructor() {}
}
