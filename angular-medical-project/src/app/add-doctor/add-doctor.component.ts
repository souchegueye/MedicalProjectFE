import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'doctor';
import { DoctorService } from '../doctor.service'; 

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctor: Doctor = new Doctor();

  constructor(private doctorService: DoctorService, private router: Router) {}

  onSubmit() {
    this.doctorService.addDoctor(this.doctor).subscribe((data: any) => {
      console.log(data);
      this.goToDoctorList();
    });
  }

  goToDoctorList() {
    this.router.navigate(['/dr']); 
  }
}
