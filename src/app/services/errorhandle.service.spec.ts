import { TestBed } from '@angular/core/testing';

import { ErrorhandleService } from './errorhandle.service';

describe('ErrorhandleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ErrorhandleService = TestBed.get(ErrorhandleService);
    expect(service).toBeTruthy();
  });
});
