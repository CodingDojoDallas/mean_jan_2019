import { TestBed } from '@angular/core/testing';

import { FirstoneService } from './firstone.service';

describe('FirstoneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirstoneService = TestBed.get(FirstoneService);
    expect(service).toBeTruthy();
  });
});
