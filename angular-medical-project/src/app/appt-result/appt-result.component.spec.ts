import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptResultComponent } from './appt-result.component';

describe('ApptResultComponent', () => {
  let component: ApptResultComponent;
  let fixture: ComponentFixture<ApptResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApptResultComponent]
    });
    fixture = TestBed.createComponent(ApptResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
