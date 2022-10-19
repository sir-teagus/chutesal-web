import { Component, OnInit } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';
import { CupService } from 'src/app/core/services/cup/cup.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-cups',
  templateUrl: './cups.component.html',
  styleUrls: ['./cups.component.scss']
})
export class CupsComponent implements OnInit {
  pages = {
    "cups": 1,
    "enterCup": 2,
    "createCup": 3,
    "createTeam": 4,
  }

  profile = this.loginService.profile;

  myCups: Cup[] = [];
  onGoingCups: Cup[] = [];
  enrollCups: Cup[] = [];
  endedCups: Cup[] = [];
  enroll = false;
  onGoing = false;
  finished = false;
  selectedCup!: Cup;

  constructor(private loginService: LoginService, private cupService: CupService) { }

  ngOnInit(): void {
    this.getMyCups()
  }

  getMyCups() {
    this.cupService.getCupsBySchools(this.profile.school).subscribe(data => {
      this.myCups = data;
      for (let i = 0; i < this.myCups.length; i++) {
        const signUpPeriod = this.myCups[i].signUpPeriod
        const cupGamesPeriod = this.myCups[i].cupGamesPeriod
        switch (this.verifyOngoingCup(signUpPeriod[signUpPeriod.length - 1], cupGamesPeriod[cupGamesPeriod.length - 1])) {
          case 'onGoing':
            this.onGoingCups.push(this.myCups[i]);
            break;
          case 'enroll':
            this.enrollCups.push(this.myCups[i])
            break;
          case 'ended':
            this.endedCups.push(this.myCups[i])
            break;
          default:
            break;
        }
      }
    })
  }

  verifyOngoingCup(value: string, value2: string) {
    const date = this.formatDate(value);
    const lastDate = this.formatDate(value2);
    const actualDate = new Date();
    if(lastDate < actualDate) {
      return 'ended';
    } else if(date < actualDate) {
      return 'onGoing'
    } else {
      return 'enroll';
    }
    // day = value.split('-')
  }

  formatDate(value: string) {
    let dateFormat: string[] = value.split('-');
    let day = dateFormat[2].split('T')[0];
    let month = dateFormat[1];
    let year = dateFormat[0];
    let cupDate = new Date(+year, +month-1, +day)
    return cupDate;
  }

  selectCup(cup: Cup, where: string) {
    console.log(cup);
    switch (where) {
      case 'enroll':
        this.enroll = true;
        break;
      case 'finished':
        this.finished = true;
        break;
      case 'ongoing':
        this.onGoing = true;
        break;
      default:
        this.enroll = false;
        this.onGoing = false;
        this.finished = false;
      }
      this.selectedCup = cup;
  }

  exitEnroll(value: boolean) {
    this.enroll = value;
  }
  exitOngoing(value: boolean) {
    this.onGoing = value;
  }
  exitFinished(value: boolean) {
    this.finished = value;
  }
}
