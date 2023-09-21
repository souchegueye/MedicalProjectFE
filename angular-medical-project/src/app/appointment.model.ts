// src/app/appointment.model.ts
export class Appointment {
  id: number;
  patientName: string;
  appointmentDate: string;
  appointmentTime: string;
  doctorId: number;
  status: string;

  constructor(
    id: number,
    patientName: string,
    appointmentDate: string,
    appointmentTime: string,
    doctorId: number,
    status: string
  ) {
    this.id = id;
    this.patientName = patientName;
    this.appointmentDate = appointmentDate;
    this.appointmentTime = appointmentTime;
    this.doctorId = doctorId;
    this.status = status;
  }
}
