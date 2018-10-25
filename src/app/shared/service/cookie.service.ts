import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  set(key: string, value: string) {
    value = encodeURIComponent(value);
    document.cookie = `${key}=${value}`;
  }

  remove(key: string) {
    document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
  }

  get(name: string) {
    const cookies = {};
    document.cookie.split(';').forEach((cookie: string) => {
      const c = cookie.trim().split('=');
      cookies[c[0]] = decodeURIComponent(c[1]);
    });
    return name ? cookies[name] : cookies;
  }

}
