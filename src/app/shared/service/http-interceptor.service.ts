import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CookieService } from './cookie.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private cookieService: CookieService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.cookieService.get('token')) {
      req = req.clone({
        setHeaders: {
          'access-token': this.cookieService.get('token'),
          // https://www.codeproject.com/Articles/866319/HTTP-Not-Modified-An-Introduction
        }
      });
    }

    if (req.body) {
      Object.keys(req.body).forEach((key: string) => {
        const value = req.body[key];
        if (value === undefined || value === '') {
          req.body[key] = null;
        }
      });
    }

    return next.handle(req);
  }
}
