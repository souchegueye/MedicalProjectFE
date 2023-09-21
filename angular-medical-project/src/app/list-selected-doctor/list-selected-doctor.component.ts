import { Component } from '@angular/core';
import { DoctorApptService } from '../doctor-appt.service';
import { Doctor } from '../doctor/doctor';
import { User } from '../user';
import { Appointment } from '../appointment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-selected-doctor',
  templateUrl: './list-selected-doctor.component.html',
  styleUrls: ['./list-selected-doctor.component.css']
})
export class ListSelectedDoctorComponent {
  selectedDoctor:Doctor;
  timeStamps:Array<string>=["9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM","12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM"]
  timeStampStart:number;
  timeStampend:number;
  appointment:Appointment = new Appointment;
  user:User;
  constructor(private doctorApptService:DoctorApptService, private router:Router) {}
ngOnInit(){
  this.selectedDoctor = this.doctorApptService.getSelectedDoctor();
  this.timeStampStart = this.findIndex(this.selectedDoctor.availableFrom);
  this.timeStampend = this.findIndex(this.selectedDoctor.availableTo);
  this.user=this.doctorApptService.getUser();
  // this.timeStamps.splice(this.timeStampStart,this.timeStampend);
  console.log(this.timeStampStart)
  console.log(this.timeStampend)
  console.log(this.user)

}
findIndex(time:string):number{
  for (let index = 0; index < this.timeStamps.length; index++) {
    if(this.timeStamps[index]===time) {
      console.log(this.timeStamps[index]);
      return index;
    }
  }
  return 0;
}
setTime(time:string):void{
console.log(time);
this.appointment.setDate(this.user.date);
this.appointment.doctorId=this.doctorApptService.getSelectedDoctor().id;
this.appointment.time=time;
console.log(this.appointment);
}
setAppt(){
  this.doctorApptService.createAppt(this.user,this.appointment).subscribe(data=>{
    console.log(data);
    this.doctorApptService.setSuccessAppt(data);
    this.router.navigate([`apptResult`])

  })
}
}
