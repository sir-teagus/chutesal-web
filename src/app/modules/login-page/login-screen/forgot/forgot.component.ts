import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  @Output() screen = new EventEmitter<string>();
  tokenSended = false;


  step = 1;
  verificationToken = 12345;

  constructor() { }

  ngOnInit(): void {
  }

  changeScreen() {
    this.screen.emit('login');
  }

  sendToken() {
    this.tokenSended = true;
  }

  nextStep() {
    this.step = 2
  }

}
