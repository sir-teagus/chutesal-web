import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewAddress } from '../models/new-address';
import { NewSchool } from '../models/new-school';
import { NewVenues } from '../models/new-venues';
import { School } from '../models/school';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  url = 'https://chutesal-api.herokuapp.com'

constructor(private http: HttpClient) { }

public getSchools(): Observable<School[]> {
  return this.http.get<School[]>(`${this.url}/schools`)
}

public createSchool(body: NewSchool): Observable<School> {
  return this.http.post<School>(`${this.url}/schools`, body);
}

public updateAddress(address: NewAddress, id: number): Observable<NewAddress> {
  return this.http.patch<NewAddress>(`${this.url}/schools/${id}/address`, address)
}
public updateVenues(venues: NewVenues, id: number): Observable<NewVenues> {
  return this.http.patch<NewVenues>(`${this.url}/schools/${id}/venues`, venues)
}

}
