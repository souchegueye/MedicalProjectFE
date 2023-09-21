import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminLandingPageComponent } from './admin-landing-page/admin-landing-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';

import { HomePageComponent } from './home-page/home-page.component';

import { ViewOrderComponent } from './view-order/view-order.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'view-order', component: ViewOrderComponent },
  { path: 'order-details', component: AddDoctorComponent },
  { path: 'admin', component: AdminLandingPageComponent }, // Removed the 'children' configuration
  { path: 'admin/registration', component: AdminRegistrationComponent }, // Add this route
  { path: 'admin/login', component: AdminLoginComponent }, // Add this route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
