import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/core/models/login/login-user';
import { LoginService } from 'src/app/core/services/login/login.service';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {

  @Output() screen = new EventEmitter<string>();
  @Output() logIn = new EventEmitter<boolean>();
  forgot = false;

  username!: string;
  password!: string;
  incorrect!: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  changeScreen(value: string) {
    switch(value) {
      case 'default':
        this.screen.emit(value);
        break;
      case 'forgot':
        this.forgot = true;
        break;
      case 'login':
        this.forgot = false;
        break;
      default:
        alert('Erro inesperado');
        break;
    }
  }

  login() {
    if(this.username == 'admin' && this.password == 'admin') {
      console.log('Logged In');
      this.goToDashboard();
      this.loginEvent();
    } else {
      console.log('Incorrect Username or Password');
      this.incorrect = true;
    }
  }

  loginEvent() {
    this.logIn.emit(true);
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard');
  }

}
