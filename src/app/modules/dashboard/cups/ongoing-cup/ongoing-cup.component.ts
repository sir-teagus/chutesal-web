import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';
import { Match } from 'src/app/core/models/cup/match';
import { CupService } from 'src/app/core/services/cup/cup.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-ongoing-cup',
  templateUrl: './ongoing-cup.component.html',
  styleUrls: ['./ongoing-cup.component.scss']
})
export class OngoingCupComponent implements OnInit {

  @Input() cup!: Cup;
  @Output() ongoing = new EventEmitter<boolean>()
  loggedIn = true;

  team1 = 'Time';
  score1 = 0;
  team2 = 'Time';
  score2 = 0;

  constructor(private loginService: LoginService, private cupService: CupService) { }

  ngOnInit() {
    this.verifyLogin()
    console.log(this.cup)
  }

  selectTeam(team: string, number: number) {
    if(number === 1) {
      this.team1 = team;
    } else {
      this.team2 = team;
    }
  }

  saveCup() {
    this.cup.matches.push({timeA: this.team1, scoreA: this.score1, timeB: this.team2, scoreB: this.score2});
    const request = { "matches": this.cup.matches};
    console.log(request);
    this.cupService.patchMatchOnCup(request, this.cup.id).subscribe(data => {
      console.log(data);
      this.exitOngoing();
    });
  }

  exitOngoing() {
    this.ongoing.emit(false);
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
