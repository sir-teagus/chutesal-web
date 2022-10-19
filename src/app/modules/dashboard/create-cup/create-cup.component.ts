import { Component, OnInit } from '@angular/core';
import { CupService } from 'src/app/core/services/cup/cup.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-create-cup',
  templateUrl: './create-cup.component.html',
  styleUrls: ['./create-cup.component.scss']
})
export class CreateCupComponent implements OnInit {

  name!: string;
  startEnroll!: Date;
  endEnroll!: Date;
  startGames!: Date;
  endGames!: Date;
  announcementDate!: Date;
  profile = this.loginService.profile;
  loggedIn = false;

  constructor(private cupService: CupService, private loginService: LoginService) { }

  ngOnInit() {
    this.verifyLogin();
  }

  submitData() {
    const startEnroll = new Date(this.startEnroll)
    const endEnroll = new Date(this.endEnroll)
    const startGames = new Date(this.startGames)
    const endGames = new Date(this.endGames)
    const announcementDate = new Date(this.announcementDate)
    const request = {
      "name": this.name,
      "signUpPeriod": [startEnroll, endEnroll],
      "cupGamesPeriod": [startGames, endGames],
      "announcementDate": announcementDate
    }
    this.cupService.CreateCupBySchools(request, this.profile.school).subscribe(() => alert('Campeonato cadastrado'))
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
