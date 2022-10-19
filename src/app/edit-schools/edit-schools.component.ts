import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from '../core/models/profile';
import { School } from '../core/models/school';
import { Venue } from '../core/models/venue';
import { SchoolsService } from '../core/services/schools.service';

@Component({
  selector: 'app-edit-schools',
  templateUrl: './edit-schools.component.html',
  styleUrls: ['./edit-schools.component.scss']
})
export class EditSchoolsComponent implements OnInit {

  create = true;
  name!: string;
  nameDis = false
  address!: string;
  originalAddress!: string;
  cupManager!: string;
  email!: string;
  emailDis = false;
  cupManagerDis = false
  venueQtd = 1;
  venues: Venue[] = [];
  originalVenues: string[] = [];
  filteredVenues: string[] = [];
  id = this.activatedRoute.snapshot.paramMap.get('id')

  constructor(
    private schoolsService: SchoolsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.verifyCreate()
  }

  verifyCreate() {
    if (+this.id! != 0) {
      this.create = false;
      const schools: School[] = JSON.parse(localStorage.getItem('schools')!);
      schools.forEach(school => {
        if(school.id == +this.id!) {
          this.name = school.name;
          this.address = school.address;
          this.cupManager = school.cupManager.name;
          this.email = school.cupManager.email;
          this.filteredVenues = school.venues;
          this.originalAddress = this.address;
          this.originalVenues = this.filteredVenues;
          for(let i = 0; i < this.filteredVenues.length; i++) {
            this.venueQtd = i + 1;
            const newVenue = {id:this.venueQtd, name: this.filteredVenues[i]};
            this.venues.push(newVenue);
          }
          this.nameDis = true
          this.cupManagerDis = true
        }
      });
    } else {
      this.createVenues()
    }
  }

  createVenues(){
    for(let i = 1; i <= this.venueQtd; i++) {
      const newVenue = {id:i, name: ''};
      this.venues.push(newVenue);
    }
  }

  addNewVenue() {
    this.venueQtd = this.venueQtd + 1;
    const newVenue = {id:this.venueQtd, name: ''}
    this.venues.push(newVenue);
  }

  filterVenues() {
    this.filteredVenues = [];
    this.venues.forEach(venue => {
      this.filteredVenues.push(venue.name)
    });
  }

  createSchool() {
    this.filterVenues();
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    const school = {
      name: this.name,
      address: this.address,
      venues: this.filteredVenues,
      cupManager: {
        name: this.cupManager,
        email: this.email,
        userName: 'admin',
        password: 'admin',
      },
    }
    console.log(school);
    if (+id! != 0) {
      if(this.address != this.originalAddress) {
        const newAddress = {address: this.address}
        this.schoolsService.updateAddress(newAddress, +id!).subscribe(() => {
          alert(`Endereço da unidade ${school.name} atualizado para ${newAddress.address}`)
        });
      }
      for(let i = 0; i < school.venues.length; i++) {
        if (this.originalVenues[i] != this.filteredVenues[i]) {
          const newVenues = {venues: this.filteredVenues}
          console.log(this.filteredVenues)
          this.schoolsService.updateVenues(newVenues, +id!).subscribe(() => {
            alert(`Campos da unidade ${school.name} atualizados para ${newVenues.venues}`)
          });
        }
      }
    } else {
      this.schoolsService.createSchool(school).subscribe(() => {
        alert(`Unidade ${school.name} criada com sucesso`);
        this.router.navigate([`schools`]);
      });
    }
    this.router.navigate([`cups`]);
  }

  cancel() {
    this.router.navigate([`schools`])
  }

}
