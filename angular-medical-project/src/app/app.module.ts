import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminLandingPageComponent,
    AdminLoginComponent, 
    AdminRegistrationComponent,
    HomePageComponent,
    AdminDashboardComponent,
        ViewDoctorComponent,
        UpdateDoctorComponent,
        DeleteDoctorComponent,
        ViewAppointmentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
