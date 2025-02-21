import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { INBAPlayer } from 'src/app/interfaces/players.interface';
import { HttpService } from 'src/app/services/http.service';
import { LoggerService } from 'src/app/services/logger.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit, AfterViewInit {
  public player?: INBAPlayer;
  public playerId = 19;

  constructor(
    private readonly httpService: HttpService,
    private readonly loggerService: LoggerService,
  ) {}

  /**
   * Angular lifecycle method.
   */
  public async ngOnInit(): Promise<void> {
    await this.getPlayer();
  }

  /**
   * Angular lifecycle method.
   */
  public async ngAfterViewInit(): Promise<void> {

  }

  /**
   * 
   */
  public async getPlayer(): Promise<void> {
    const url = 'https://api.balldontlie.io/v1/players';
    
    const response = await this.httpService.get<any>(`${url}/${this.playerId}`);
    this.loggerService.debug(`Fetched response`, response);

    if (response) {
      this.player = response.data
    }
    this.loggerService.debug(`Fetched player`, this.player);

  }
}


