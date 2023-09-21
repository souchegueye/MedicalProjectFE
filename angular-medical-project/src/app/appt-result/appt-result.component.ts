import { Component } from '@angular/core';
import { AppointmentRequest } from '../appointment-request';
import { DoctorApptService } from '../doctor-appt.service';
import { User } from '../user';
import { Doctor } from '../doctor/doctor';

@Component({
  selector: 'app-appt-result',
  templateUrl: './appt-result.component.html',
  styleUrls: ['./appt-result.component.css']
})
export class ApptResultComponent {

  constructor(private doctapptService:DoctorApptService) {}

  appt:AppointmentRequest = new AppointmentRequest;
  user:User = new User;
  doctor:Doctor;  

ngOnInit(){
  this.appt=this.doctapptService.getSuccessAppt();
  this.doctapptService.getUserByIdAndAppt(this.appt.user.id,this.appt.appt.appointmentId).subscribe(data =>{
    this.user = data;
  })
  this.doctapptService.getDoctorById(this.appt.appt.doctorId).subscribe(data=>{
    this.doctor=data;
  })
  this.appt.appt.date
}
}
