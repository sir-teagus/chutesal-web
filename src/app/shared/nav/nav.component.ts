import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Output() page = new EventEmitter<string>();

  profileName = this.loginService.profile.name;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  changePage(page: string) {
    this.page.emit(page);
  }

}
