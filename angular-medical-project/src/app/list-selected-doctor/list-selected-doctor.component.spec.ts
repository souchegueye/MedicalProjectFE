import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectedDoctorComponent } from './list-selected-doctor.component';

describe('ListSelectedDoctorComponent', () => {
  let component: ListSelectedDoctorComponent;
  let fixture: ComponentFixture<ListSelectedDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListSelectedDoctorComponent]
    });
    fixture = TestBed.createComponent(ListSelectedDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
