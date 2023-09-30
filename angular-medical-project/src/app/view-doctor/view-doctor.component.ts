import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'doctor';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {
  dId:number;
  doctor:Doctor = new Doctor();
  appointments:Appointment[];
  constructor(private route:ActivatedRoute,private doctorService:DoctorService, private router:Router, private apptService:AppointmentService) {}
  ngOnInit(){
    this.dId = this.route.snapshot.params['id']; 
    this.doctorService.getADoctor(this.dId).subscribe(data=>{
      this.doctor =data;
    })
    this.apptService.getApptsByDoctor(this.dId).subscribe(data=>{
      this.appointments=data;
      console.log(this.appointments);
    })
  }
}
