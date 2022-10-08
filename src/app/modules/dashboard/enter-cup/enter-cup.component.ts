import { Component, OnInit } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';
import { Enroll } from 'src/app/core/models/enroll/enroll';
import { CupService } from 'src/app/core/services/cup/cup.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-enter-cup',
  templateUrl: './enter-cup.component.html',
  styleUrls: ['./enter-cup.component.scss']
})
export class EnterCupComponent implements OnInit {

  onGoingCups: Cup[] = [];
  myCups: Cup[] = [];
  profile = this.loginService.profile;
  subscribe = false;
  teamName: string = '';
  player1: string = 'Selecione um jogador';
  player2: string = 'Selecione um jogador';
  player3: string = 'Selecione um jogador';
  player4: string = 'Selecione um jogador';
  player5: string = 'Selecione um jogador';
  allPlayers!: Enroll[];
  loggedIn = false;

  constructor(private loginService: LoginService, private cupService: CupService) { }

  ngOnInit() {
    this.getMyCups()
  }

  getMyCups() {
    this.cupService.getCupsBySchools(this.profile.school).subscribe(data => {
      let myCups = data;
      for (let i = 0; i < this.myCups.length; i++) {
        const signUpPeriod = this.myCups[i].signUpPeriod
        const cupGamesPeriod = this.myCups[i].cupGamesPeriod
        switch (this.verifyOngoingCup(signUpPeriod[signUpPeriod.length - 1], cupGamesPeriod[cupGamesPeriod.length - 1])) {
          case 'enroll':
            this.onGoingCups.push(this.myCups[i]);
            break;
          default:
            break;
        }
      }
      this.verifyLogin();
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
    let cupDate = new Date(+year, +month, +day)
    return cupDate;
  }

  openSubscribe(cupId: number) {
    console.log(cupId)
    this.subscribe = true;
    this.cupService.enrollsByCup(cupId).subscribe(data => {
      console.log(data)
      this.allPlayers = data
    });
  }

  sendTeam(cupId: number) {
    const team = {
      "name": this.teamName,
      "players": [
        this.player1,
        this.player2,
        this.player3,
        this.player4,
        this.player5,
      ]
    }
    console.log(team)
    this.cupService.creteTeamOnCup(team, cupId).subscribe(() => {
      alert('Time inscrito no campeonato');
      this.clearFields();
      this.subscribe = false;
    });
  }

  selectPlayer(name: string) {
    if(this.player1 === 'Selecione um jogador') {
      this.player1 = name;
    }else if(this.player2 === 'Selecione um jogador') {
      this.player2 = name;
    }else if(this.player3 === 'Selecione um jogador') {
      this.player3 = name;
    }else if(this.player4 === 'Selecione um jogador') {
      this.player4 = name;
    }else if(this.player5 === 'Selecione um jogador') {
      this.player5 = name;
    }
  }

  clearFields() {
    this.teamName = '';
    this.player1 = 'Selecione um jogador';
    this.player2 = 'Selecione um jogador';
    this.player3 = 'Selecione um jogador';
    this.player4 = 'Selecione um jogador';
    this.player5 = 'Selecione um jogador';
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
