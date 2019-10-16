import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  perfilUsuario: string; 
  // dish: Dish;
  // promotion: Promotion;
  // leader: Leader;
  constructor() { }

  ngOnInit() {
  }

}
