import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { WeatherService } from './weather.service';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { RecentsComponent } from './recents/recents.component';


const appRoutes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'favourite', component: FavouriteComponent
  },
  {
    path: 'recents', component: RecentsComponent
  },

  {
    path: 'home', component: HomeComponent
  }

];


@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,

    FavouriteComponent,

    RecentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
