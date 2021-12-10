import { TestBed } from '@angular/core/testing';

import { GnewsConfigService } from './gnews-config.service';

describe('GnewsConfigService', () => {
  let service: GnewsConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GnewsConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
