// src/app/doctor-auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from './doctor.model';

@Injectable({
  providedIn: 'root',
})
export class DoctorAuthService {
  private baseUrl = 'http://localhost:8080'; // Replace with your actual backend URL

  constructor(private http: HttpClient) {}

  login(doctor: Doctor): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/dr/authenticate`, doctor);
  }
}
