import { TestBed } from '@angular/core/testing';

import { OktaConfigService } from './okta-config.service';

describe('OktaConfigService', () => {
  let service: OktaConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OktaConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
