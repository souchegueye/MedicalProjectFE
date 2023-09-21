import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  username: string = '';
  password: string = '';

  constructor(private adminService: AdminService) {}

  loginAdmin() {
    this.adminService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Admin login successful', response);
        // Redirect to admin dashboard or handle success as needed
      },
      (error: any) => {
        console.error('Login failed', error);
        // Handle authentication failure (e.g., display an error message)
      }
    );
  }
}