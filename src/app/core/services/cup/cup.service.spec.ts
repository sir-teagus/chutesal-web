/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CupService } from './cup.service';

describe('Service: Cup', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CupService]
    });
  });

  it('should ...', inject([CupService], (service: CupService) => {
    expect(service).toBeTruthy();
  }));
});
