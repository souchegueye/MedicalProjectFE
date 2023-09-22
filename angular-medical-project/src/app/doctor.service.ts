import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'doctor';


@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private baseUrl = 'http://localhost:4200/dr/'; 

  constructor(private http: HttpClient) {}

  addDoctor(doctor: Doctor): Observable<Doctor> {
    const url = `${this.baseUrl}/dr/add`;
    return this.http.post<Doctor>(url, doctor);
  }
}
