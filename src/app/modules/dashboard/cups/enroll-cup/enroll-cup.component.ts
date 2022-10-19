import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cup } from 'src/app/core/models/cup/cup';
import { CupService } from 'src/app/core/services/cup/cup.service';

@Component({
  selector: 'app-enroll-cup',
  templateUrl: './enroll-cup.component.html',
  styleUrls: ['./enroll-cup.component.scss']
})
export class EnrollCupComponent implements OnInit {

  @Output() enroll = new EventEmitter<boolean>();
  @Input() cup!: Cup

  name!: string;
  nickname!: string;
  birthDate!: Date;
  whatsApp!: number;

  constructor(private cupService: CupService) { }


  ngOnInit() {
  }

  enrollInCup() {
    const request = {
      "fullName": this.name,
      "nickName": this.nickname,
      "birthDate": new Date(this.birthDate),
      "whatsApp": this.whatsApp.toString(),
      "cupId": this.cup.id,
    }
    this.cupService.enrollInCup(request, this.cup.id).subscribe(() => {
      alert(`Obrigado, ${this.name}, por se inscreve em ${this.cup.name}, cup-id: ${this.cup.id}`)
      this.exitEnroll();
    });
  }

  exitEnroll() {
    this.enroll.emit(false);
  }

}
