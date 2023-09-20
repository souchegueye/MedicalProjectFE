import { Component } from '@angular/core';
import { DoctorApptService } from '../doctor-appt.service';
import { Doctor } from '../doctor/doctor';

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
  constructor(private doctorApptService:DoctorApptService) {}
ngOnInit(){
  this.selectedDoctor = this.doctorApptService.getSelectedDoctor();
  this.timeStampStart = this.findIndex(this.selectedDoctor.availableFrom);
  this.timeStampend = this.findIndex(this.selectedDoctor.availableTo);
  // this.timeStamps.splice(this.timeStampStart,this.timeStampend);
  console.log(this.timeStampStart)
  console.log(this.timeStampend)

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
}
