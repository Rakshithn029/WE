import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class WeatherService {


  apiKey = '1ca82d8547311592a120c2808bec4b1c';

  url;
  constructor(public http: Http) {

    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=&units=metric';
  }


  getWeather(city) {


    let url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric" + "&APPID=" + this.apiKey
    url = url.replace(' ', '')
    console.log(url);

    return this.http.get(url).map(res => res.json());


  }
  getWeatherCoord(lat, lon) {

    let url = "http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&units=metric" + "&lon=" + lon + "&APPID=" + this.apiKey
    url = url.replace(' ', '')
    console.log(url);

    return this.http.get(url).map(res => res.json());

  }

}
