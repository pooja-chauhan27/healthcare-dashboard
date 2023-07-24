import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsComponent } from './patients/patients.component';

@NgModule({
  declarations: [DashboardComponent, AppointmentComponent, EditComponent, PatientsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgFor,
    DecimalPipe,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
