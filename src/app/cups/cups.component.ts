import { Component, OnInit } from '@angular/core';
import { Cup } from '../core/models/cup';
import { School } from '../core/models/school';
import { CupsService } from '../core/services/cups.service';
import { SchoolsService } from '../core/services/schools.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {

  today = new Date();
  schools!: School[];
  allCups: Cup[] = [];
  finishedCups: Cup[] = [];
  ongoingCups: Cup[] = [];
  announcedCups: Cup[] = [];
  schoolList!: School[];


  constructor(private cupsService: CupsService, private schoolsService: SchoolsService) { }

  ngOnInit(): void {
    console.log("Cups Component")
    this.schools = JSON.parse(localStorage.getItem('schools')!)
    this.getAllCups();
  }

  getAllCups() {
    this.schoolsService.getSchools().subscribe(schools => {
      this.schoolList = schools;
      console.log(this.schoolList);
      localStorage.setItem('schools', JSON.stringify(this.schoolList));
      this.schools.forEach(school => {
        this.cupsService.getCupsBySchools(school.id).subscribe(cups => {
          cups.forEach(cup => {
            this.filterCups(cup);
          })
        });
      });
    });
  }

  filterCups(cup: Cup) {
    switch (cup.status) {
      case 'ANDAMENTO':
        this.ongoingCups.push(cup);
        this.allCups.push(cup);
        break;

      case 'CANCELADO':
        this.finishedCups.push(cup);
        this.allCups.push(cup);
        break;

      case 'EXECUTADO':
        this.finishedCups.push(cup);
        this.allCups.push(cup);
        break;

      case 'PLANEJADO':
        const date = new Date(cup.announcementDate)
        if (date < this.today){
          this.announcedCups.push(cup);
          this.allCups.push(cup);
        } else {
          this.allCups.push(cup);
        }
        break;

      default:
        this.allCups.push(cup);
        break;
    }
  }

}
