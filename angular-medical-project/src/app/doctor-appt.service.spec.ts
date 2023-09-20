import { TestBed } from '@angular/core/testing';

import { DoctorApptService } from './doctor-appt.service';

describe('DoctorApptService', () => {
  let service: DoctorApptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorApptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
