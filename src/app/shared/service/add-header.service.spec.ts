import { TestBed, inject } from '@angular/core/testing';

import { AddHeaderService } from './add-header.service';

describe('AddHeaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddHeaderService]
    });
  });

  it('should be created', inject([AddHeaderService], (service: AddHeaderService) => {
    expect(service).toBeTruthy();
  }));
});
