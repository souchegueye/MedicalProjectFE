import { Component } from '@angular/core';
import { Doctor } from '../doctor.model';
import { DoctorAuthService } from '../doctor-auth.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css'],
})
export class DoctorLoginComponent {
  doctor: Doctor = new Doctor(0, '', '', '', '', 0, 0, '', '', '');
  loginError = false;

  constructor(private authService: DoctorAuthService) {}

  login() {
    this.authService.login(this.doctor).subscribe(
      (response) => {
        console.log(response);
        if (response.success) {
        } else {
          this.loginError = true;
        }
      },
      (error) => {
        this.loginError = true;
        console.error('Login failed:', error);
      }
    );
  }
}
