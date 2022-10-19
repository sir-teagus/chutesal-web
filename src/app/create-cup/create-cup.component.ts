import { Component, OnInit } from '@angular/core';
import { School } from '../core/models/school';

@Component({
  selector: 'app-create-cup',
  templateUrl: './create-cup.component.html',
  styleUrls: ['./create-cup.component.scss']
})
export class CreateCupComponent implements OnInit {

  name!: string;
  announcementDate!: Date;
  startSignup!: Date;
  endSignup!: Date;
  startGames!: Date;
  endGames!: Date;
  schools = JSON.parse(localStorage.getItem('schools')!)
  filteredSchools: School[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filterSchools();
  }

  filterSchools() {
    this.schools.forEach((school: School) => {
      if (school.cupManager !== null) {
        this.filteredSchools.push(school)
      }
    })
  }

  createCup() {
    const cup = {
      name: this.name,
      signUpPeriod: [this.startSignup, this.endSignup],
      cupGamesPeriod: [this.startGames, this.endGames],
      announcementDate: this.announcementDate
    }

    console.log(cup)
  }

}
