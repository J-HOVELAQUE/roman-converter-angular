import { TestBed } from '@angular/core/testing';

import { NumeralRepoService } from './numeral-repo.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('NumeralRepoService', () => {
  let service: NumeralRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    service = TestBed.inject(NumeralRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
