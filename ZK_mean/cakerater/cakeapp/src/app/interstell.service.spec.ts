import { TestBed } from '@angular/core/testing';

import { InterstellService } from './interstell.service';

describe('InterstellService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterstellService = TestBed.get(InterstellService);
    expect(service).toBeTruthy();
  });
});
