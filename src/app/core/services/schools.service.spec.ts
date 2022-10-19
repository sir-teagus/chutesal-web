/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SchoolsService } from './schools.service';

describe('Service: Schools', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolsService]
    });
  });

  it('should ...', inject([SchoolsService], (service: SchoolsService) => {
    expect(service).toBeTruthy();
  }));
});
