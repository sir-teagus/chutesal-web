import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../../models/school/school';
import { URL } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

constructor(private http: HttpClient) { }

public getSchools(): Observable<School[]> {
  return this.http.get<School[]>(URL + `schools`);
}

public CreateSchool(request: School): Observable<School> {
  return this.http.post<School>(URL + `schools`, request);
}

public UpdateSchoolAddress(request: any, id: number): Observable<any> {
  return this.http.patch<any>(URL + `schools/${id}/address`, request);
}

public updateSchoolVenues(request: any, id: number): Observable<any> {
  return this.http.patch<any>(URL + `schools/${id}/venues`, request);
}

}
