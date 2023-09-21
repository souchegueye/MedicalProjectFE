// src/app/doctor-appointments.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';
import { Appointment } from './appointment.model'; // Import the Appointment class as needed

@Injectable({
  providedIn: 'root',
})
export class DoctorAppointmentsService {
  private baseUrl = 'http://your-backend-api-url'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  getAppointmentsForDoctor(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(
      `${this.baseUrl}/dr/getByType/${doctorId}`
    );
  }
}
