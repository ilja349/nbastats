import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders as AngularHttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { lastValueFrom } from 'rxjs';
import { LoggerService } from './logger.service';

export class HttpHeaders extends AngularHttpHeaders { }

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private headers: HttpHeaders;

  constructor(
    private logger: LoggerService,
    private http: HttpClient,
  ) {
    this.headers = new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Authorization', '2b786c8e-be1e-47dc-9aa6-f23dfd46e292');
  }

  /**
  *
  * @param url
  * @param headers
  * @param params
  */
  public async get<T>(url: string, headers?: HttpHeaders, params?: Record<string, any>): Promise<T> {
    this.logger.debug(`HttpService: Perform GET request to url ${url}`);
    try {
      const result$ = this.http.get<T>(
        url,
        {
          headers: await this.getRequestHeaders(headers),
          params,
        },
      );

      const lastResult = await lastValueFrom(result$);
      return lastResult;
    } catch (error) {
      throw this.handleHttpError(error as HttpErrorResponse);
    }
  }

  /**
  *
  * @param url
  * @param body
  * @param headers
  * @param params
  */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async post<T>(url: string, body?: any, headers?: HttpHeaders, params?: Record<string, any>): Promise<T> {
    this.logger.debug(`HttpService: Perform POST request to url ${url} with body ${JSON.stringify(body)}`);

    try {
      const result$ = this.http.post<T>(
        url,
        body,
        {
          headers: await this.getRequestHeaders(headers),
          ...params,
        },
      );

      const lastResult = await lastValueFrom(result$);
      return lastResult;
    } catch (error) {
      throw this.handleHttpError(error as HttpErrorResponse);
    }
  }

  /**
  *
  * @param url
  * @param body
  * @param headers
  * @param params
  */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async put<T>(url: string, body?: any, headers?: HttpHeaders, params?: Record<string, any>): Promise<T> {
    this.logger.debug(`HttpService: Perform PUT request to url ${url} with body ${JSON.stringify(body)}`);

    try {
      const result$ = this.http.put<T>(
        url,
        {
          headers: await this.getRequestHeaders(headers),
          ...params,
        },
      ).pipe(retry(1));

      const lastResult = await lastValueFrom(result$);
      return lastResult;
    } catch (error) {
      throw this.handleHttpError(error as HttpErrorResponse);
    }
  }

  /**
  *
  * @param url
  * @param body
  * @param headers
  * @param params
  */
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public async patch<T>(url: string, body?: any, headers?: HttpHeaders, params?: Record<string, any>): Promise<T> {
    this.logger.debug(`HttpService: Perform PATCH request to url ${url}`);

    try {
      const result$ = this.http.patch<T>(
        url,
        body,
        {
          headers: await this.getRequestHeaders(headers),
          params,
        },
      ).pipe(retry(1));

      const lastResult = await lastValueFrom(result$);
      return lastResult;
    } catch (error) {
      throw this.handleHttpError(error as HttpErrorResponse);
    }
  }

  /**
  *
  * @param url
  * @param headers
  * @param params
  */
  public async delete<T>(url: string, headers?: HttpHeaders, params?: Record<string, any>): Promise<T> {
    this.logger.debug(`HttpService: Perform DELETE request to url ${url}`);

    try {
      const result$ = this.http.delete<T>(
        url,
        {
          headers: await this.getRequestHeaders(headers),
          params,
        },
      ).pipe(retry(1));

      const lastResult = await lastValueFrom(result$);
      return lastResult;
    } catch (error) {
      throw this.handleHttpError(error as HttpErrorResponse);
    }
  }

  /**
   * Handle Http error response
   *
   * @param error Http error to handle
   *
   * @returns Handled Http error
   */
  private handleHttpError(error: HttpErrorResponse): Error {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `HttpService: Error Code: ${error.status}\nMessage: ${error.message}\nError Type: ${error.error as string}`;
    }

    return new Error(errorMessage);
  }

  /**
   * Returns a copy of the general request headers merged with the specified headers.
   *
   * @param headers HttpHeaders
   *
   * @returns HttpHeaders
   */
  private async getRequestHeaders(headers: HttpHeaders | undefined): Promise<HttpHeaders> {
    return new HttpHeaders({ ...this.headersToRecord(this.headers), ...this.headersToRecord(headers) });
  }

  /**
   * Transforms httpHeaders to a string record.
   *
   * @param headers HttpHeaders
   *
   * @returns Record<string, any>
   */
  private headersToRecord(headers: HttpHeaders | undefined): Record<string, any> {
    const record: Record<string, any> = {};
    if (headers) {
      headers.keys().forEach((key: string) => {
        const value = headers.get(key);
        if (value) {
          record[key] = value;
        }
      });
    }

    return record;
  }
}
