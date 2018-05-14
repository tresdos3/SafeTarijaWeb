import { TestBed, inject } from '@angular/core/testing';

import { WindowService } from './window-service.service';

describe('WindowServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowService]
    });
  });

  it('should be created', inject([WindowService], (service: WindowService) => {
    expect(service).toBeTruthy();
  }));
});
