import { TestBed } from '@angular/core/testing';

import { BcHomeService } from './bc-home.service';

describe('BcHomeService', () => {
  let service: BcHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
