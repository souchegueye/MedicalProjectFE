import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent {
  @Input() doctor: any; 

  constructor(private doctorService: DoctorService) {}

  updateDoctor() {
    this.doctorService.updateDoctor(this.doctor).subscribe(
      () => {
        console.log('Doctor updated successfully');
        
      },
      (error: any) => {
        console.error('Error updating doctor', error);
      }
    );
  }
}

