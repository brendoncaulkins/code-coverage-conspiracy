import { TestBed } from '@angular/core/testing';

import { ConspiracyService } from './conspiracy.service';

describe('ConspiracyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConspiracyService = TestBed.get(ConspiracyService);
    expect(service).toBeTruthy();
  });
});
