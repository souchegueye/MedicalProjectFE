import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/appointments'; // Replace with your actual backend URL


  constructor(private httpClient:HttpClient) { }
  getAllAppts():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`this.baseUrl/all`);
  }
  getApptsByDoctor(id:number):Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}/byDoctor/${id}`);
  }
  
}
