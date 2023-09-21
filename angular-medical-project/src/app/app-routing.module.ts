import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { ViewOrderComponent } from './view-order/view-order.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'admin', component:AdminRegistrationComponent},
  {path:'admin-login',component:AdminLoginComponent},
  {path:'update-doctor',component:UpdateDoctorComponent},
  {path:'view-order',component:ViewOrderComponent},
  {path:'delete-doctor',component:DeleteDoctorComponent},
  {path:'order-details',component:AddDoctorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
