import { Component } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent {
    username: string = '';
    password: string = '';
    errorMessage: string = '';

    constructor(private adminService: AdminService, private router: Router) {}

    loginAdmin() {
        this.adminService.login(this.username, this.password).subscribe(
            (response: any) => {
                
                if (response === true) {
                    console.log('Admin logged in successfully');
                    this.errorMessage = ''; 
                    this.router.navigate(['/admin-dashboard']);
                } else {
                    console.error('Login failed');
                    this.errorMessage = 'Login failed. Please check your username and password.';
                }
            },
            (error: any) => {
                console.error('Login failed', error);
                this.errorMessage = 'An error occurred during login. Please try again later.';
            }
        );
    }
}
