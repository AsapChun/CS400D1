import { Component, OnInit, Input } from '@angular/core';
import {DATA} from '../DATA';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() selectedCity : DATA
  constructor() { }

  ngOnInit(): void {
  }

}
