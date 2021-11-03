import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserData{

  constructor(  
  ) { }
  private currentUser: string;

  get currentUserValue(){
    //this.isAuthenticated = true;
    this.currentUser = localStorage.getItem('user');
    return this.currentUser;
  }


  set currentUserValue(user:string){
    this.currentUser = user;
    localStorage.setItem('user', user);
  }

}
