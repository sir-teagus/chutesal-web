import { Component, OnInit } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';
import { CupService } from 'src/app/core/services/cup/cup.service';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  page = 'cups';

  constructor() { }

  ngOnInit(): void {
  }

  changePage(page: string) {
    console.log(page)
    this.page = page;
  }

}
