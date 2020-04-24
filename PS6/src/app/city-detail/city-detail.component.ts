import { Component, OnInit, Input } from '@angular/core';
import {DATA} from '../DATA';
import {from, Observable, of, timer} from 'rxjs';
import { WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html',
  styleUrls: ['./city-detail.component.css']
})
export class CityDetailComponent implements OnInit {
  @Input() selectedCity: DATA;
  @Input() outputCity: string;
  Numbers: Observable<any>; //methods: subscribe(). unsubscribe(), next()
  Timer: Observable<any>;
  Observer: any;
  currentValue: number;
  errorValue: any;
  time: number;
  weather: any;



  constructor(private wx: WeatherService) {
    //this.Numbers = of(1,2,3,4,5,6,7,8) creates a list
    //this.Numbers = from([1,2,3,4,5,6,7,8]); //creates observable
    //this.Timer = timer(2000, 3000);
    //console.log('in constructor');
  }

  ngOnInit(): void {
  }

  //inject weather service
  getWeather() {
      this.wx.getWeather(this.outputCity).subscribe(
        response => {
          this.weather = response['list'];
        }
      )
  }

  /*
  obsOptions = { //pass in next(), error(), complete()
    next: value =>{
      console.log("in next ", value);
      this.currentValue = value;
    },
    error: err => {
      console.log("in error ", err);
      this.errorValue = err;
    },
    complete: () => {

    }
  };

  getNumbers() {
    console.log('subscribing');
    this.Observer = this.Numbers.subscribe(this.obsOptions);
  }
  timerOptions = { //pass in next(), error(), complete()
    next: value =>{
      console.log("in next ", value);
      this.time = value;
    },
    error: err => {
      console.log("in error ", err);
      this.errorValue = err;
    },
    complete: () => {

    }
  };
  startTimer(){
    console.log('starting timer...');
    this.Timer.subscribe(this.timerOptions);
  }
 */
}
