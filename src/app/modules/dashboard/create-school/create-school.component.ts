import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/core/models/school/school';
import { SchoolService } from 'src/app/core/services/school/school.service';

@Component({
  selector: 'app-create-school',
  templateUrl: './create-school.component.html',
  styleUrls: ['./create-school.component.scss']
})
export class CreateSchoolComponent implements OnInit {

  schools = this.schoolService.schools
  selectedSchool = false;
  school = new School;
  address!: string;
  venue1!: string;
  venue2!: string;
  venue3!: string;
  venue4!: string;
  venue5!: string;

  constructor(private schoolService: SchoolService) { }

  ngOnInit() {
    this.getSchool();
  }

  selectSchool() {
    this.selectedSchool = true
  }

  submitData() {
    const venues = {"venues": [this.venue1, this.venue2, this.venue3, this.venue4, this.venue5]};
    console.log(venues)
    console.log(this.address)
    this.schoolService.UpdateSchoolAddress(this.address, 1).subscribe(() => {
      this.schoolService.updateSchoolVenues(venues, 1).subscribe(() => {alert('Edição salva com sucesso')})
    });
  }

  getSchool() {
    this.schoolService.getSchools().subscribe(data => {
      this.school = data[0];
      this.venue1 = this.school.venues[0]
      this.venue2 = this.school.venues[1]
      this.venue3 = this.school.venues[2]
      this.venue4 = this.school.venues[3]
      this.venue5 = this.school.venues[4]
      this.address = this.school.address
    });
  }

}
