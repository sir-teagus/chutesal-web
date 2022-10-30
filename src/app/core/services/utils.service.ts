import { Injectable } from '@angular/core';
import { Match } from '../models/match';
import { Team } from '../models/team';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

testCup = {
  id: 1,
  status: 'CANCELADO',
  name: 'Campeonato',
  teams: [
    {
      name: 'Time 1',
      players: ['p1', 'p2', 'p3', 'p4', 'p5']
    },
    {
      name: 'Time 2',
      players: ['p1', 'p2', 'p3', 'p4', 'p5']
    },
    {
      name: 'Time 3',
      players: ['p1', 'p2', 'p3', 'p4', 'p5']
    },
  ],
  signUpPeriod: [new Date().toString(), new Date().toString()],
  cupGamesPeriod: [new Date().toString(), new Date().toString()],
  announcementDate: new Date(),
  createdAt: new Date().toString(),
  updatedAt: new Date().toString(),
  matches: [
    {
      timeA: 'Time 1',
      scoreA: 2,
      timeB: 'Time 2',
      scoreB: 1
    },
    {
      timeA: 'Time 1',
      scoreA: 3,
      timeB: 'Time 3',
      scoreB: 0
    },
    {
      timeA: 'Time 2',
      scoreA: 1,
      timeB: 'Time 3',
      scoreB: 2
    },
    {
      timeA: 'Time 1',
      scoreA: 3,
      timeB: 'Time 3',
      scoreB: 4
    }
  ],
  schoolId: 1
}

loggedIn: boolean = false;

constructor() { }

verifyLogin(user: string, password: string) {
  if(user == 'admin' && password == 'admin') {
    this.loggedIn = true;
    return true;
  } else {
    return false;
  }
}

}
