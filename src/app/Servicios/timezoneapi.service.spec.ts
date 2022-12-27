import { TestBed } from '@angular/core/testing';

import { TimezoneapiService } from './timezoneapi.service';

describe('TimezoneapiService', () => {
  let service: TimezoneapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimezoneapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
