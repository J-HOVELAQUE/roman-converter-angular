import { TestBed } from '@angular/core/testing';

import { NumeralRepoService } from './numeral-repo.service';

describe('NumeralRepoService', () => {
  let service: NumeralRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumeralRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
