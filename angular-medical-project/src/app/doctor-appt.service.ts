import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorApptService {
  private baseUrl = "http://localhost:8080/dr";
  private finalUrl="";
  private symptomList:string[]=['Fever','Knee pain'];
  private sexes:string[]=['Male','Female'];
  private selectedDoctor:Doctor;
  constructor(private httpClient:HttpClient) { }

  getDoctorByService(symptom:string):Observable<Doctor[]>{
    let sp = this.getDoctorService(symptom);
    this.finalUrl = `${this.baseUrl}/getByType/${sp}`;
    console.log(this.finalUrl);  
      return this.httpClient.get<Doctor[]>(this.finalUrl);
  }

  getDoctorService(symptom:string):number{
    let i=1;
    for (const symptomSelected of this.symptomList) {
      if(symptomSelected===symptom) return i;
      i++;
    }
    return 0;
  }

  setSelectedDoctor(doctor:Doctor):void{
    this.selectedDoctor=doctor;
  }
  getSelectedDoctor():Doctor{
    return this.selectedDoctor;
  }

  getSymptomList():string[]{
    return this.symptomList;
  }

  getSexes():string[]{
    return this.sexes;
  }
}
