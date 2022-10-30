import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cup } from '../models/cup';
import { Observable } from 'rxjs'
import { Enroll } from '../models/enroll';
import { Match } from '../models/match';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class CupsService {

url = 'https://chutesal-api.herokuapp.com'

constructor(private http: HttpClient) { }

public getCupsBySchools(id: number): Observable<Cup[]> {
  return this.http.get<Cup[]>(`${this.url}/schools/${id}/cups`);
}

public signUpToCup(id: number, body: Enroll): Observable<Enroll> {
  return this.http.post<Enroll>(`${this.url}/cups/${id}/enroll`, body);
}

public signUpGames(body: Match, id?: number): Observable<Match> {
  return this.http.post<Match>(`${this.url}/cups/${id}/matches`, body);
}

public getEnrollsByCup(id?: number): Observable<Enroll[]> {
  return this.http.get<Enroll[]>(`${this.url}/cups/${id}/enroll`);
}

public createTeam(body: Team, id?: number): Observable<Team> {
  return this.http.post<Team>(`${this.url}/cups/${id}/teams`, body);
}
}
