import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Login } from '../model/login.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient,
  ) {}

  login(user: Login): Observable<string> {
    return this.httpClient.post<string>('http://localhost:8000/login', user);
  }

  logout(): Observable<any> {
    return this.httpClient.delete('http://localhost:8000/login');
  }
}
