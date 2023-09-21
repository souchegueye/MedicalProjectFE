import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from './doctor/doctor';
import { User } from './user';
import { Appointment } from './appointment';
import { AppointmentRequest } from './appointment-request';

@Injectable({
  providedIn: 'root'
})
export class DoctorApptService {
  private baseUrl = "http://localhost:8080";
  private finalUrl="";
  private symptomList:string[]=['Fever','Knee pain'];
  private sexes:string[]=['Male','Female'];
  private selectedDoctor:Doctor;
  private user:User = new User;
  private apptReq:AppointmentRequest = new AppointmentRequest;
  constructor(private httpClient:HttpClient) { }

  getDoctorByService(symptom:string):Observable<Doctor[]>{
    let sp = this.getDoctorService(symptom);
    this.finalUrl = `${this.baseUrl}/dr/getByType/${sp}`;
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
  setUser(inUser:User):void{
    this.user=inUser;
  }
  getUser():User{
    return this.user;
  }

  getSymptomList():string[]{
    return this.symptomList;
  }

  getSexes():string[]{
    return this.sexes;
  }

  setSuccessAppt(apptSucc:AppointmentRequest){
    this.apptReq = apptSucc;
  }
  getSuccessAppt():AppointmentRequest{
    return this.apptReq;
  }

  createAppt(inUser:User,appt: Appointment){
      this.apptReq.appt=appt;
      this.apptReq.user=inUser;
      this.finalUrl = `${this.baseUrl}/appointments/create`;
      console.log(this.finalUrl);  
      console.log(this.apptReq);
      return this.httpClient.post<AppointmentRequest>(this.finalUrl,this.apptReq);
  }

  getDoctorById(id:number):Observable<Doctor>{
    this.finalUrl = `${this.baseUrl}/dr/get/${id}`;
    console.log(this.finalUrl);  
      return this.httpClient.get<Doctor>(this.finalUrl);
  }

  getUserByIdAndAppt(userId:number,apptId:number):Observable<User>{
    this.finalUrl = `${this.baseUrl}/usr/getdetails?apptname=${apptId}&userId=${userId}`;
    console.log(this.finalUrl);  
      return this.httpClient.get<User>(this.finalUrl);
  }

}
