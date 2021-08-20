import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './weather.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  city: string;


  constructor(private router: Router) {

  }

}
