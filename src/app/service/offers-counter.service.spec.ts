import { TestBed } from '@angular/core/testing';

import { OffersCounterService } from './offers-counter.service';

describe('OffersCounterService', () => {
  let service: OffersCounterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersCounterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
