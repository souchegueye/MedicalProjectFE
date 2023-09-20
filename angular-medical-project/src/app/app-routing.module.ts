import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'admin-registration', component:AdminRegistrationComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'add-doctor',component:AddDoctorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
