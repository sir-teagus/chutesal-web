import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { School } from '../core/models/school';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.scss']
})
export class SchoolsComponent implements OnInit {

  schools = JSON.parse(localStorage.getItem('schools')!)
  filteredSchools: School[] = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.filteredSchools)
    this.filterSchools();
  }

  goToEdit(id: number) {
    console.log(id)
    this.router.navigate([`edit-schools/${id}`])
  }

  filterSchools() {
    this.schools.forEach((school: School) => {
      if (school.cupManager !== null) {
        this.filteredSchools.push(school)
      }
    })
  }

}
