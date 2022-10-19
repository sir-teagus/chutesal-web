import { Component, OnInit } from '@angular/core';
import { School } from './core/models/school';
import { SchoolsService } from './core/services/schools.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chutesal-front';

  constructor() {}

  ngOnInit() {

  }
}
