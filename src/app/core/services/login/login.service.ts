import { Injectable } from '@angular/core';
import { LoginUser } from '../../models/login/login-user';
import { Profile } from '../../models/profile/profile';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  login: LoginUser = {"username": "admin", "password": "admin"}

  isLoggedIn = false;

  profile: Profile = {
    "username": "admin",
    "password": "admin",
    "name": 'João dos Santos',
    "nickname": "Trinca",
    "team": 'Bola Dentro',
    "cups": ['Copinha'],
    "myCups": [],
    "school": 1,
}

  constructor() { }
}
