import { TestBed, inject } from '@angular/core/testing';

import { UrlStoreService } from './url-store.service';

describe('UrlStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlStoreService]
    });
  });

  it('should be created', inject([UrlStoreService], (service: UrlStoreService) => {
    expect(service).toBeTruthy();
  }));
});
