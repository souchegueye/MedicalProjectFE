import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent {
  doctor: any = {}; 

  constructor(private doctorService: DoctorService) {}

  addDoctor() {
    this.doctorService.addDoctor(this.doctor).subscribe(data =>{
      console.log('Doctor added successfully', response);
      
        
      },
      (error: any) => {
        console.error('Error adding doctor', error);
      }
    );
  }
}
