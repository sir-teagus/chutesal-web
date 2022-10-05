import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-create-account-screen',
  templateUrl: './create-account-screen.component.html',
  styleUrls: ['./create-account-screen.component.scss']
})
export class CreateAccountScreenComponent implements OnInit {

  @Output() screen = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeScreen() {
    this.screen.emit('default');
  }

}
