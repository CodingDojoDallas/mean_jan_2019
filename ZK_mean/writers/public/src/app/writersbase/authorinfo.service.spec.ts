import { TestBed } from '@angular/core/testing';

import { AuthorinfoService } from './authorinfo.service';

describe('AuthorinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthorinfoService = TestBed.get(AuthorinfoService);
    expect(service).toBeTruthy();
  });
});
