import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorApptService } from '../doctor-appt.service';
import { Doctor } from '../doctor/doctor';
import { User } from '../user';

@Component({
  selector: 'app-list-probable-doctors',
  templateUrl: './list-probable-doctors.component.html',
  styleUrls: ['./list-probable-doctors.component.css']
})
export class ListProbableDoctorsComponent {
  spec:string;
  listSelectedDoctors:Array<Doctor>;
  user:User;
  constructor(private route:ActivatedRoute,private doctorApptService:DoctorApptService, private router:Router) {}
  ngOnInit(): void {
    this.spec = this.route.snapshot.params['spec'];
    this.user=this.doctorApptService.getUser();
    this.doctorApptService.getDoctorByService(this.spec).subscribe(data=>{
      this.listSelectedDoctors = data;
      console.log(this.listSelectedDoctors);
    })
  }
  selectedDoctor(doctor:Doctor):void{
    console.log(doctor)
    this.doctorApptService.setSelectedDoctor(doctor);
    this.router.navigate([`selectedDoctor`]);
  }
}
