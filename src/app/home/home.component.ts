import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  weather: any;
  value: any;
  inCity = ''

  constructor(private _weatherService: WeatherService) {

  }


  ngOnInit() {


    navigator.geolocation.getCurrentPosition(
      position => {
        this._weatherService.getWeatherCoord(position.coords.latitude, position.coords.longitude).subscribe(
          response => {


            this.weather = response;


          }
        )
      }
    )

  }


  onWeatherCity() {
    this._weatherService.getWeather(this.inCity).subscribe(
      response => {
        console.log(response);

        this.weather = response;
      }
    );
  }
}




