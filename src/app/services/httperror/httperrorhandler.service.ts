import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';

import { NotificationService } from '../notification/notification.service';

export type HandleError =
  <T> (operation?: string, result?: T) => (error: HttpErrorResponse) => Observable<T>;

@Injectable()
export class HttpErrorHandler {
  constructor(private messageService: NotificationService) { }

 
  createHandleError = (serviceName = '') => <T>
    (operation = 'operation', result = {} as T) => this.handleError(serviceName, operation, result);

  handleError<T> (serviceName = '', operation = 'operation', result = {} as T) {

    return (error: HttpErrorResponse): Observable<T> => {
      // console.error(error);
      // console.log('snak')
      const message = (error.error instanceof ErrorEvent) ?
      error.error.message :
       `server returned code ${error.status} with body "${error.error}"`;

      this.messageService.showAlert(`${serviceName}: ${operation} failed: ${message}`);
      // this.messageService.showAlert(error.message);

      return of(result);
    };

  }
}


/*


/** Type of the handleError function returned by HttpErrorHandler.createHandleError */
 /** Create curried handleError function that already knows the service name */
  /**
   * Returns a function that handles Http operation failures.
   * This error handler lets the app continue to run as if no error occurred.
   * @param serviceName = name of the data service that attempted the operation
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
 // TODO: send the error to remote logging infrastructure

       // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning a safe result.
/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/