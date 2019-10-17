import { Component } from '@angular/core';
import { FIREBASE_CONFIG } from '../app/app.firebase.config';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'comanda19';
  constructor(){
    firebase.initializeApp(FIREBASE_CONFIG);
  }

  
}
