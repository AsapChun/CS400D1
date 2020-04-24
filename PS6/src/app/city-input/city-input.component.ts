import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DATA} from '../DATA';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-city-input',
  templateUrl: './city-input.component.html',
  styleUrls: ['./city-input.component.css']
})
export class CityInputComponent implements OnInit {
  inputCity: string;
  @Output() cityDataOut = new EventEmitter<string>();
  location : FormGroup = new FormGroup(
    {
      //can add different parameters
      selectedCity: new FormControl('')
    }
  );

  constructor() {
  }

  ngOnInit(): void {
  }

  emitCity(city:string){
    console.log("in emitter function: city is "+ city);
    this.cityDataOut.emit(city); //should send value back to parent
  }

  updateCity(city: string) {
    console.log("in update city");
    this.inputCity = city;

  }

}


