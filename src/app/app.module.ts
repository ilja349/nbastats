import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation-header/navigation-header.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WeatherComponent } from './weather/weather.component';
import { SecretComponent } from './secret/secret.component';
import { LandingPageComponent } from './nba/landing-page/landing-page.component';
import { TeamsComponent } from './nba/teams/teams.component';
import { PlayersComponent } from './nba/players/players.component';
import { GamesComponent } from './nba/games/games.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    CalculatorComponent,
    ToDoComponent,
    WeatherComponent,
    SecretComponent,
    LandingPageComponent,
    TeamsComponent,
    PlayersComponent,
    GamesComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.DEBUG,
      enableSourceMaps: true,
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
