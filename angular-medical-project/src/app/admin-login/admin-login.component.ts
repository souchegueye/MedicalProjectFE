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
        
      },
      (error: any) => {
        console.error('Login failed', error);
        
      }
    );
  }
}
