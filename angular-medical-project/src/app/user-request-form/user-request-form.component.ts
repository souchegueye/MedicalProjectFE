import { Component } from '@angular/core';
import { User } from '../user';
import { DoctorApptService } from '../doctor-appt.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-request-form',
  templateUrl: './user-request-form.component.html',
  styleUrls: ['./user-request-form.component.css']
})
export class UserRequestFormComponent {
user:User=new User;
symptomList:string[] = new Array<string>;
sexes:string[]=new Array<string>;
constructor(private doctorApptService:DoctorApptService,private router:Router) {}
ngOnInit(){
  this.symptomList = this.doctorApptService.getSymptomList();
  this.sexes = this.doctorApptService.getSexes();
}
onSubmit(){
console.log(this.user);
this.router.navigate([`list-selected-doctors/${this.user.symptoms}`]);
}
}
