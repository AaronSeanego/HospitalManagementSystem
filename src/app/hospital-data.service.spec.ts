import { TestBed } from '@angular/core/testing';

import { HospitalDataService } from './hospital-data.service';

describe('HospitalDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HospitalDataService = TestBed.get(HospitalDataService);
    expect(service).toBeTruthy();
  });
});
