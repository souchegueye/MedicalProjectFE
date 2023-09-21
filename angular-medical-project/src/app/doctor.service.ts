import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  addDoctor(doctor: any) {
    throw new Error('Method not implemented.');
  }
  private baseURL= "http://localhost:8080/api/v1/admin";

  constructor(private httpClient : HttpClient) { }
  getEmployeeeList() : Observable<DoctorService[]>{
  return this.httpClient.get<DoctorService[]>(`${this.baseURL}`);
  }
  createEmployee(employee:DoctorService):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,employee);
  }
  getEmployeeById(id : number): Observable<DoctorService>{
    return this.httpClient.get<DoctorService>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id:number , employee :DoctorService):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id:number) : Observable<Object>{
    return this.httpClient.delete( `${this.baseURL}/${id}`);
  }
}
