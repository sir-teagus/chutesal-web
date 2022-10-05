import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  screen = "default";

  constructor() { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.screen = 'login';
  }

  goToCreateAccount() {
    this.screen = 'create-account';
  }

  goToDefault(value: string) {
    this.screen = value;
  }

}
