import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CityDetailComponent } from './city-detail/city-detail.component';
import {WeatherService} from './services/weather.service';
import { HttpClientModule} from '@angular/common/http';
import { CityInputComponent } from './city-input/city-input.component';

@NgModule({
  declarations: [
    AppComponent,
    CityDetailComponent,
    CityInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
