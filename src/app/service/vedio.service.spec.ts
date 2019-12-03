import { TestBed } from '@angular/core/testing';

import { VedioService } from './vedio.service';

describe('VedioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VedioService = TestBed.get(VedioService);
    expect(service).toBeTruthy();
  });
});
