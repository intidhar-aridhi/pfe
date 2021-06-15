import { TestBed } from '@angular/core/testing';

import { FemmeService } from './femme.service';

describe('FemmeService', () => {
  let service: FemmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FemmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
