/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CupsService } from './cups.service';

describe('Service: Cups', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CupsService]
    });
  });

  it('should ...', inject([CupsService], (service: CupsService) => {
    expect(service).toBeTruthy();
  }));
});
