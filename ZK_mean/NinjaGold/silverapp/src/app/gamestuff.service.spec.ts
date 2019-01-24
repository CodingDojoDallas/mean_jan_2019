import { TestBed } from '@angular/core/testing';

import { GamestuffService } from './gamestuff.service';

describe('GamestuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GamestuffService = TestBed.get(GamestuffService);
    expect(service).toBeTruthy();
  });
});
