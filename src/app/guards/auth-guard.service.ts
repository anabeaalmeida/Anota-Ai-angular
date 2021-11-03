import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { UserData } from '../data/userData';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private userData: UserData
  ) { }
  //private isAuthenticated: boolean = false;

  doLogin(login:string){
    //this.isAuthenticated = true;
    this.userData.currentUserValue = login + " ";
    console.log('>>> login!!!!', login);

  }

  doLogout(){
    //this.isAuthenticated = false;
    this.userData.currentUserValue = '';
    console.log('<<<<< logout!!!!');

  }

  canActivate() {
    let isAuthenticated = localStorage.getItem('user')? true: false;

    if(!isAuthenticated){
      this.router.navigate(['/login']);
    }

    return isAuthenticated;
  }
}
