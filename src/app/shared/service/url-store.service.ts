import { Injectable } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UrlStoreService {
  urlArray: Array<string> = [];

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
  ) { }

  storeSourceUrl(url: string) {
    this.urlArray.push(url);
    if (this.urlArray.length > 2) {
      this.urlArray.shift();
    }
  }

  showUrlStorage() {
    return this.urlArray;
  }

  showPreviousUrl() {
    return this.urlArray[0];
  }
}
