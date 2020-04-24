import { Component } from '@angular/core';
import {ArrDATA} from './DATA-MOCK';
import {DATA} from "./DATA";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CS400 PS6';
  datas = ArrDATA;
  selectedCity: DATA;


  selectCity(data: DATA) {
    this.selectedCity = data;
  }

}

