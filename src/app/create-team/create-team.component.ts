import { Component, OnInit } from '@angular/core';
import { Cup } from '../core/models/cup';
import { Enroll } from '../core/models/enroll';
import { CupsService } from '../core/services/cups.service';
import { UtilsService } from '../core/services/utils.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  // announcedCups = localStorage.getItem('announcedCups');
  announcedCups!: Cup[]
  selectedCup!: Cup
  enrollsSearched = false;
  enrolls!: Enroll[];
  teamName!: string;
  player1!: string;
  player2!: string;
  player3!: string;
  player4!: string;
  player5!: string;

  constructor(
    private utils: UtilsService,
    private cupsService: CupsService,
    ) { }

  ngOnInit(): void {
    this.announcedCups =  JSON.parse(localStorage.getItem('announcedCups') as string);
  }

  getEnroll(id?: number) {
    this.cupsService.getEnrollsByCup(id).subscribe( (data) => {
      this.enrolls = data;
      this.enrollsSearched = true;
    });
  }

  createTeam(id?: number) {
    if(
      !this.teamName
      || !this.player1
      || !this.player2
      || !this.player3
      || !this.player4
      || !this.player5
      ) {
        alert('Preencha corretamente os campos');
      } else {
        const body = {
          name: this.teamName,
          players: [
            this.player1,
            this.player2,
            this.player3,
            this.player4,
            this.player5
          ]
        }
        this.cupsService.createTeam(body, id).subscribe( () => {
          alert(`Time ${this.teamName} criado`)
        });
      }
  }

  cancel() {
    this.enrollsSearched = false;
  }

}
