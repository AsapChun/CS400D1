import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {ArrDATA} from './DATA-MOCK';
import {DATA} from "./DATA";
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {CityInputComponent} from './city-input/city-input.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'CS400 PS7';
  datas = ArrDATA;
  selectedCity: DATA;
  outputCity:string;

  /*
  city: FormControl =new FormControl('Enter a city');
  location : FormGroup = new FormGroup(
    {
      //can add different parameters
      city2: new FormControl('')
    }
  );

  selectCity(data: DATA) {
    this.selectedCity = data;
  }

   */

  recieveCity($event){
    console.log('in recieveCity');
    this.outputCity = $event
    console.log('outputCity is '+ this.outputCity);

  }
}



