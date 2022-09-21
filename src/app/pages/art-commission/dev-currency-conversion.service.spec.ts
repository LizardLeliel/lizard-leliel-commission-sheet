import { TestBed } from '@angular/core/testing';

import { DevCurrencyConversionService } from './dev-currency-conversion.service';

describe('DevCurrencyConversionService', () => {
  let service: DevCurrencyConversionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevCurrencyConversionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
