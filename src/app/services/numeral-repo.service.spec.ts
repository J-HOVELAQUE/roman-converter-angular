import { TestBed } from '@angular/core/testing';

import { NumeralRepoService } from './numeral-repo.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NumeralRepoService', () => {
  let service: NumeralRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NumeralRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method implementation', () => {
    expect(service.convertRomanToArab('test')).not.toBeUndefined();
  });
});
