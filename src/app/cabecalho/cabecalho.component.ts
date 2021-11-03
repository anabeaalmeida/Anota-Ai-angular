import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../guards/auth-guard.service';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UserData} from '../data/userData';




@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  constructor(
    private authGuard: AuthGuardService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public userData: UserData
  ) { }

  user: string = '';

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
  }
  doLogout(){


    this.authGuard.doLogout();
    this.router.navigate(['/login']);
    this.openSnackBar("Logout realizado com sucesso", "ok");
  }
  

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }


}
