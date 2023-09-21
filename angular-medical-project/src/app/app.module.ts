import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserRequestFormComponent } from './user-request-form/user-request-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AdminRegistrationComponent } from './admin-registration/admin-registration.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { DeleteDoctorComponent } from './delete-doctor/delete-doctor.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UserRequestFormComponent,
    AddDoctorComponent,
    AdminRegistrationComponent,
    AdminLoginComponent,
    ViewOrderComponent,
    UpdateDoctorComponent,
    DeleteDoctorComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
