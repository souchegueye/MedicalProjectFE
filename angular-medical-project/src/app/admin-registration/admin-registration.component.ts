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
      (response: any) => {
        console.log(response); 
        if (response && response.status === 200) {
          this.successMessage = 'Admin registered successfully';
          this.errorMessage = '';
        } else {
          
          this.successMessage = 'Registration sucessfull'; 
        }
      },
      (error: any) => {
        console.error(error);
        this.errorMessage = 'Registration failed: ' + error.message;
      
      }
    );
    
  }
  goToHomePage() {
    this.router.navigate(['/']);
  }
}