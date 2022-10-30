import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Cup } from '../core/models/cup';
import { Match } from '../core/models/match';
import { School } from '../core/models/school';
import { CupsService } from '../core/services/cups.service';
import { SchoolsService } from '../core/services/schools.service';
import { UtilsService } from '../core/services/utils.service';

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
  panelOpenState = false;
  // loggedIn = this.utils.loggedIn
  loggedIn = true

  playerName!: string;
  playerNickname!: string;
  playerBirthDate!: Date;
  playerWhatsapp!: string;

  user!: string;
  password!: string;

  teamA!: string;
  scoreA!: string;
  teamB!: string;
  scoreB!: string;

  constructor(
    private cupsService: CupsService,
    private schoolsService: SchoolsService,
    private utils: UtilsService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("Cups Component")
    this.getAllCups();
    this.filterCups(this.utils.testCup)
  }

  getAllCups() {
    this.schoolsService.getSchools().subscribe(schools => {
      this.schoolList = schools;
      console.log(this.schoolList);
      localStorage.setItem('schools', JSON.stringify(this.schoolList));
      this.schools = JSON.parse(localStorage.getItem('schools')!)
      this.schools.forEach(school => {
        this.cupsService.getCupsBySchools(school.id).subscribe(cups => {
          cups.forEach(cup => {
            this.filterCups(cup);
          });
          localStorage.setItem('announcedCups', JSON.stringify(this.announcedCups));
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

  enrollInCup(cupName: string, id?: number) {
    const body = {
      fullName: this.playerName,
      nickname: this.playerNickname,
      birthdate: this.playerBirthDate,
      whatsApp: this.playerWhatsapp
    }

    this.cupsService.signUpToCup(id!, body).subscribe(() => {
      console.log(id);
      alert(`Jogador ${this.playerName} inscrito no Campeonato ${cupName}`)
    });
  }

  verifyLogin() {
    this.loggedIn = this.utils.verifyLogin(this.user, this.password);
  }

  signGame(id?: number) {
    const body = {matches: [{
      timeA: this.teamA,
      scoreA: +this.scoreA,
      timeB: this.teamB,
      scoreB: +this.scoreB
    }]
    }
    this.cupsService.signUpGames(body, id).subscribe(() => {
      console.log(body);
      alert('Jogo registrado');
    });
  }

  verifyFirst(matches: Match[]) {
    const len = matches.length - 1;
    if(matches[len].scoreA > matches[len].scoreB) {
      return matches[len].timeA;
    } else {
      return matches[len].timeB;
    }
  }
  verifySecond(matches: Match[]) {
    const len = matches.length - 1;
    if(matches[len].scoreA > matches[len].scoreB) {
      return matches[len].timeB;
    } else {
      return matches[len].timeA;
    }
  }
  verifyThird(matches: Match[]) {
    const len = matches.length - 2;
    if(matches[len].scoreA > matches[len].scoreB) {
      return matches[len].timeB;
    } else {
      return matches[len].timeA;
    }
  }

}
