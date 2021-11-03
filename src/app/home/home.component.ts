import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  breakpoint: number;

  ngOnInit() {
    console.log('innerwidth',window.innerWidth);
    this.breakpoint = window.innerWidth <= 1000 ? 1 :3;
  }

  onResize(event) {
    console.log('innerwidth',window.innerWidth);
    this.breakpoint = event.target.innerWidth <= 1000 ? 1 : 3;
  }
  

}
