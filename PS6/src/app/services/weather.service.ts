import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';
import {wxConfigs as config} from '../configs/wxConfig';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  getWeather(city: string){
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${config.apiKey}&units=imperial`)

  }
  //Injections are done thru the constructor
  constructor(private http: HttpClient) {

  }
}
