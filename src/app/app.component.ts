import { Component, OnInit } from '@angular/core';
import { SchoolService } from './core/services/school/school.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'chutesal-front';
  school = {
            "id": 1,
            "name": "Sorocaba",
            "address": "Rua da Penha, 321",
            "venues": [
                "S1",
                "S2",
                "S3",
                "S4",
                "S5"
            ],
            "cupManager": "Thiago",
            "createdAt": "2022-09-29T12:36:34.170Z",
            "updatedAt": "2022-10-04T03:45:02.446Z"
        }

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    // this.schoolService.CreateSchool(this.school).subscribe(() => console.log('created school'))
  }
}
