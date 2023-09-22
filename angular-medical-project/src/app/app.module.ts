
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRequestFormComponent } from './user-request-form/user-request-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ListProbableDoctorsComponent } from './list-probable-doctors/list-probable-doctors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListSelectedDoctorComponent } from './list-selected-doctor/list-selected-doctor.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ApptResultComponent } from './appt-result/appt-result.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserRequestFormComponent,
    ListProbableDoctorsComponent,
    ListSelectedDoctorComponent,
    AddDoctorComponent,
    AdminRegistrationComponent,
    AdminLoginComponent,
    ApptResultComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
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
