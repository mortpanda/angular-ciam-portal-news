import { TestBed } from '@angular/core/testing';

import { GnewsGetService } from './gnews-get.service';

describe('GnewsGetService', () => {
  let service: GnewsGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnewsGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
