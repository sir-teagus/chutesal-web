import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';

@Component({
  selector: 'app-finished-cup',
  templateUrl: './finished-cup.component.html',
  styleUrls: ['./finished-cup.component.scss']
})
export class FinishedCupComponent implements OnInit {

  @Input() cup!: Cup;
  @Output() finished = new EventEmitter<boolean>()

  constructor() { }

  ngOnInit() {
    console.log(this.cup);
  }

  exitFinished() {
    this.finished.emit(false);
  }

}
