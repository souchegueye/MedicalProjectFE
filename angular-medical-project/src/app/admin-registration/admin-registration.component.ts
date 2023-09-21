import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
})
export class AdminRegistrationComponent {
  username: string = '';
  password: string = '';
  successMessage: string = ''; 
  errorMessage: string = ''; 

  constructor(private adminService: AdminService, private router: Router) {}

  registerAdmin() {
    this.adminService.register(this.username, this.password).subscribe(
      (message: string) => {
        console.log(message);
        this.successMessage = message;
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = error;
      }
    );
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}
