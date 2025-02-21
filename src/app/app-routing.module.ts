import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ToDoComponent } from './to-do/to-do.component';
import { WeatherComponent } from './weather/weather.component';
import { LandingPageComponent } from './nba/landing-page/landing-page.component';
import { TeamsComponent } from './nba/teams/teams.component';
import { PlayersComponent } from './nba/players/players.component';
import { GamesComponent } from './nba/games/games.component';

const routes: Routes = [
  /**
   * Sign-up and sign-in pages.
   */
  {
    path: '',
    redirectTo: 'nba',
    pathMatch: 'full',
  },
  {
    path: 'nba',
    component: LandingPageComponent,
  },
  {
    path: 'nba/teams',
    component: TeamsComponent,
  },
  {
    path: 'nba/players',
    component: PlayersComponent,
  },
  {
    path: 'nba/games',
    component: GamesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
