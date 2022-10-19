import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cup } from '../models/cup';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CupsService {

  url = 'https://chutesal-api.herokuapp.com'

constructor(private http: HttpClient) { }

public getCupsBySchools(id: number): Observable<Cup[]> {
  return this.http.get<Cup[]>(`${this.url}/schools/${id}/cups`);
}

}
