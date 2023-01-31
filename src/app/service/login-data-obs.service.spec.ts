import { TestBed } from '@angular/core/testing';

import { LoginDataObsService } from './login-data-obs.service';

describe('LoginDataObsService', () => {
  let service: LoginDataObsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginDataObsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
