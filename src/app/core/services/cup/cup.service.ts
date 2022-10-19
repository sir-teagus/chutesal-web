import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cup } from '../../models/cup/cup';
import { URL } from 'src/app/shared/utils/constants';
import { Enroll } from '../../models/enroll/enroll';
import { Team } from '../../models/team/team';
import { CreateCup } from '../../models/cup/createCup';
import { Match } from '../../models/cup/match';

@Injectable({
  providedIn: 'root'
})
export class CupService {

constructor(private http: HttpClient) { }

public getCupsBySchools(id: number): Observable<Cup[]> {
  return this.http.get<Cup[]>(URL + `schools/${id}/cups`);
}

public CreateCupBySchools(request: CreateCup, id: number): Observable<Cup> {
  return this.http.post<Cup>(URL + `schools/${id}/cups`, request)
}

public enrollsByCup(id: number): Observable<Enroll[]> {
  return this.http.get<Enroll[]>(URL + `cups/${id}/enroll`);
}

public enrollInCup(request: Enroll, id: number): Observable<Enroll> {
  return this.http.post<Enroll>(URL + `cups/${id}/enroll`, request);
}

public getTeamOnCup(id: number): Observable<Team[]> {
  return this.http.get<Team[]>(URL + `cups/${id}/teams`);
}

public creteTeamOnCup(request: Team, id: number): Observable<Team> {
  return this.http.post<Team>(URL + `cups/${id}/teams`, request)
}

public patchMatchOnCup(request: any, id: number): Observable<any> {
  return this.http.patch<any>(URL + `cups/${id}/matches`, request)
}

}
