import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { AuthenticationService } from './authentication/authentication.service';
import { NotificationService } from './notification/notification.service';

@Injectable()
export class ErrorhandleService implements HttpInterceptor {
    constructor(
        private authenticationService: AuthenticationService,
        private notificationService: NotificationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            } else if (err.status === 0) {
                this.notificationService.showAlert('Unknonw Error Occured !');
            } else if (err.status === 400) {
                this.notificationService.showAlert('Bad Request');
            } else if (err.status === 404) {
                this.notificationService.showAlert('Not Found !');
            }  else if (err.status === 200) {
                this.notificationService.showAlert('Success !');
            } else {
                this.notificationService.showAlert('Something went wrong !');
            }
            const error = err.error.message || err.statusText;
            return throwError(error);
        })
        );
    }
}