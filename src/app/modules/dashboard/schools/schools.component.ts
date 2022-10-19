import { Component, OnInit } from '@angular/core';
import { School } from 'src/app/core/models/school/school';
import { LoginService } from 'src/app/core/services/login/login.service';
import { SchoolService } from 'src/app/core/services/school/school.service';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  school = new School;
  schools = this.schoolService.schools;
  createSchool = false;
  address!: string;
  loggedIn = false;
  id = this.schools[this.schools.length - 1].id;


  newName!: string;
  newAddress!: string;
  newCupManager!: string;
  newVenue1!: string;
  newVenue2!: string;
  newVenue3!: string;
  newVenue4!: string;
  newVenue5!: string;

  constructor(private schoolService: SchoolService, private loginService: LoginService) { }


  ngOnInit() {
    // this.getSchoolsList();
  }

  onCreateSchool() {
    this.createSchool = !this.createSchool;
  }

  getSchoolsList() {
    // this.schoolService.getSchools().subscribe(data => {console.log(data);this.schools = data});
  }

  newSchool(){
    let newSchool = {
      "id": this.id + 1,
      "name": this.newName,
      "address": this.newAddress,
      "cupManager": this.newCupManager,
      "venues": [
        this.newVenue1,
        this.newVenue2,
        this.newVenue3,
        this.newVenue4,
        this.newVenue5
      ],
      "createdAt": "2022-10-05T12:46:16.298Z",
      "updatedAt": "2022-10-05T12:46:16.298Z"
    }

    this.schoolService.schools.push(newSchool);
    this.onCreateSchool()
  }

  verifyLogin() {
    if(this.loginService.isLoggedIn) {
      this.loggedIn = true;
    }
  }

  login(value: boolean) {
    this.loggedIn = value;
    this.loginService.isLoggedIn = value;
  }

}
