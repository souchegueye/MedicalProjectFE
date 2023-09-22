import { Component } from '@angular/core';

import { AdminService } from '../admin.service';
import { Doctor } from '../doctor/doctor';




@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctor: Doctor = new Doctor(); 

  constructor(private adminService: AdminService) {}

  onSubmit() {
    this.adminService.addDoctor(this.doctor).subscribe(
      (response) => {
        console.log('Doctor added successfully:', response);
      },
      (error) => {
        console.error('Error adding doctor:', error);
      }
    );
  }
}
