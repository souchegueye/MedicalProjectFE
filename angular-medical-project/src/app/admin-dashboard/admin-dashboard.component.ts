import { Component } from '@angular/core';
import { DoctorService } from '../doctor.service';
import { Doctor } from 'doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

listofDoctors:Doctor[]
constructor (private doctorService:DoctorService, private router:Router) { }
ngOnInit(){
this.doctorService.getAllDoctors().subscribe(data=>{
this.listofDoctors=data;
console.log(this.listofDoctors);
})
}
viewDoctor(id: number) {
  console.log(id);
this.router.navigate([`view-doctor/${id}`])
}
}
