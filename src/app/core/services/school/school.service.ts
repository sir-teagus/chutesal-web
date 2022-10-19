import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { School } from '../../models/school/school';
import { URL } from 'src/app/shared/utils/constants';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  schools = [
    {
        "id": 1,
        "name": "São Paulo",
        "address": "Avenida Paulista, 123",
        "venues": [
            "Allianz Parque",
            "Paulista",
            "Neo Quimica",
            "Olimpico do Ibirapuera",
            "Portuguesa"
        ],
        "cupManager": "Diego",
        "createdAt": "2022-10-05T12:46:16.298Z",
        "updatedAt": "2022-10-05T12:46:16.298Z"
    },
    {
        "id": 2,
        "name": "teste2",
        "address": "Avenida Paulista, 321",
        "venues": [
            "Allianz Parque",
            "teste",
            "Neo Quimica",
            "Olimpico do Ibirapuera",
            "Portuguesa"
        ],
        "cupManager": "Thiago",
        "createdAt": "2022-10-05T12:46:16.298Z",
        "updatedAt": "2022-10-05T12:46:16.298Z"
    },
    {
        "id": 3,
        "name": "teste 3",
        "address": "Rua teste, 555",
        "venues": [
            "campo 1",
            "campo 2",
            "campo 3",
            "campo 4",
            "campo 5"
        ],
        "cupManager": "Lucas",
        "createdAt": "2022-10-05T12:46:16.298Z",
        "updatedAt": "2022-10-05T12:46:16.298Z"
    },
  ];

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
