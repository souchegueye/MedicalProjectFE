import { Injectable } from '@angular/core';
import { Doctor } from './doctor/doctor';
import { User } from './user';
import { AppointmentRequest } from './appointment-request';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDetailsService {
  private baseUrl = "http://localhost:8080";
  private finalUrl="";

  private selectedDoctor:Doctor;
  private user:User = new User;
  private apptReq:AppointmentRequest = new AppointmentRequest;
  constructor(private httpClient:HttpClient) { }
  

}
