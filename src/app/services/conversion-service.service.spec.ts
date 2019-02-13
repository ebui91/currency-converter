import { TestBed, inject } from '@angular/core/testing';

import { ConversionServiceService } from './conversion-service.service';

describe('ConversionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConversionServiceService]
    });
  });

  it('should be created', inject([ConversionServiceService], (service: ConversionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
