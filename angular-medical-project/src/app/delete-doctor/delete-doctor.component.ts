import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-doctor',
  templateUrl: './delete-doctor.component.html',
  styleUrls: ['./delete-doctor.component.css']
})
export class DeleteDoctorComponent {
  @Input() doctor: any; 

  constructor(private doctorService: DoctorService) {}

  deleteDoctor(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId).subscribe(
      () => {
        console.log('Doctor deleted successfully');
        
      },
      (error: any) => {
        console.error('Error deleting doctor', error);
      }
    );
  }
}
