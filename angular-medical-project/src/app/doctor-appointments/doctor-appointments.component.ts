// src/app/doctor-appointments/doctor-appointments.component.ts
import { Component } from '@angular/core';
import { DoctorAppointmentsService } from '../doctor-appointments.service';
import { Appointment } from '../appointment.model';

@Component({
  selector: 'app-doctor-appointments',
  templateUrl: './doctor-appointments.component.html',
  styleUrls: ['./doctor-appointments.component.css'],
})
export class DoctorAppointmentsComponent {
  appointments: Appointment[] = [];

  constructor(private appointmentsService: DoctorAppointmentsService) {}

  ngOnInit() {
    this.loadAppointments();
  }

  loadAppointments() {
    // We can replace '1' with the actual doctor ID
    this.appointmentsService
      .getAppointmentsForDoctor(1)
      .subscribe((data) => (this.appointments = data));
  }
}
