import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProbableDoctorsComponent } from './list-probable-doctors.component';

describe('ListProbableDoctorsComponent', () => {
  let component: ListProbableDoctorsComponent;
  let fixture: ComponentFixture<ListProbableDoctorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProbableDoctorsComponent]
    });
    fixture = TestBed.createComponent(ListProbableDoctorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
