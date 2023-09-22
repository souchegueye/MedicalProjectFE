import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

import { HomePageComponent } from './home-page/home-page.component';

import { UserRequestFormComponent } from './user-request-form/user-request-form.component';
import { ListProbableDoctorsComponent } from './list-probable-doctors/list-probable-doctors.component';
import { ListSelectedDoctorComponent } from './list-selected-doctor/list-selected-doctor.component';
import { ApptResultComponent } from './appt-result/appt-result.component';



import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { ViewDoctorComponent } from './view-doctor/view-doctor.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'order-details', component: AddDoctorComponent },
  { path: 'admin-landing-page', component: AdminLandingPageComponent },

  { path: 'admin-registration', component: AdminRegistrationComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
  { path: 'add-doctor', component: AddDoctorComponent },

  { path: 'user-details', component: UserRequestFormComponent },
  {
    path: 'list-selected-doctors/:spec',
    component: ListProbableDoctorsComponent,
  },
  { path: 'selectedDoctor', component: ListSelectedDoctorComponent },
  {
    path: 'list-selected-doctors/:spec',
    component: ListProbableDoctorsComponent,
  },
  { path: 'selectedDoctor', component: ListSelectedDoctorComponent },
  { path: 'apptResult', component: ApptResultComponent },

  { path: 'view-doctor', component: ViewDoctorComponent },
  { path: 'update-doctor', component: UpdateDoctorComponent },
  { path: 'delete-doctor', component: DeleteDoctorComponent },
  { path: 'view-appointments', component: ViewAppointmentsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule], 
  exports: [RouterModule],
})
export class AppRoutingModule {}
