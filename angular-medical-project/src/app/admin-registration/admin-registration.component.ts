// admin-registration.component.ts
import { Component } from '@angular/core';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css'],
})
export class AdminRegistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private adminService: AdminService) {}

  registerAdmin() {
    this.adminService.register(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Admin registered successfully', response);
        
      },
      (error: any) => {
        console.error('Registration failed', error);
        
      }
    );
  }
}
