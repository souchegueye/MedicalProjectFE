import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { DoctorLoginComponent } from './doctor-login.component';

describe('DoctorLoginComponent', () => {
  let component: DoctorLoginComponent;
  let fixture: ComponentFixture<DoctorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DoctorLoginComponent],
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have a login function', () => {
    expect(component.login).toBeDefined();
  });

  it('should have a doctor object with default values', () => {
    expect(component.doctor).toBeDefined();
    expect(component.doctor.id).toBe(0);
    expect(component.doctor.uname).toBe('');
    expect(component.doctor.pwd).toBe('');
  });

  it('should have a loginError property initialized as false', () => {
    expect(component.loginError).toBe(false);
  });

  it('should set loginError to true when login fails', () => {
    // Simulate a failed login by calling the login method
    component.login();
    expect(component.loginError).toBe(true);
  });
});
