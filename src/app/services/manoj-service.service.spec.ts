import { TestBed, inject } from '@angular/core/testing';

import { ManojServiceService } from './manoj-service.service';

describe('ManojServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManojServiceService]
    });
  });

  it('should be created', inject([ManojServiceService], (service: ManojServiceService) => {
    expect(service).toBeTruthy();
  }));
});
