import { Injectable } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  private readonly prefix = '[nhchat]';

  constructor(
    private logger: NGXLogger,
  ) { }

  public trace(message?: string, ...additional: any[]): void {
    this.logger.trace(this.prefix + ' ' + message, additional);
  }

  public debug(message?: string, ...additional: any[]): void {
    this.logger.debug(this.prefix + ' ' + message, additional);
  }

  public info(message?: string, ...additional: any[]): void {
    this.logger.info(this.prefix + ' ' + message, additional);
  }

  public warn(message?: string, ...additional: any[]): void {
    this.logger.warn(this.prefix + ' ' + message, additional);
  }

  public error(message?: string, ...additional: any[]): void {
    this.logger.error(this.prefix + ' ' + message, additional);
  }

  public fatal(message?: string, ...additional: any[]): void {
    this.logger.fatal(this.prefix + ' ' + message, additional);
  }
}
