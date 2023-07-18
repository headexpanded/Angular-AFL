import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ClubService } from './club.service';
import { LogoService } from './logo.service';
import { Club } from './club';
import { Observable } from 'rxjs';
import { asyncData, asyncError } from './testing/async-observable-helpers';

let httpClientSpy: jasmine.SpyObj<HttpClient>;
let clubService: ClubService;
let logoService: LogoService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  clubService = new ClubService(httpClientSpy, logoService);
});

it('should return expected club data', (done: DoneFn) => {
  const expectedClubData: Club[] = [
    {
      id: 2,
      name: 'Brisbane Lyons',
      logo: './assets/logos/3.png',
      pts: 0,
      played: 0,
      goals_against: 0,
      goals_for: 0,
      rank: 0,
      wins: 0,
      losses: 0,
      draws: 0,
      for: 0,
      against: 0,
      percentage: 0,
      behinds_against: 0,
      behinds_for: 0,
    },
  ];
  httpClientSpy.get.and.returnValue(asyncData(expectedClubData));

  clubService.getClubById(2).subscribe({
    next: (club) => {
      expect(club).withContext('expected club').toEqual(expectedClubData[0]);
      done();
    },
    error: done.fail,
  });
  expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
});




