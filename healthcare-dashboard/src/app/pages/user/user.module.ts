import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { EditComponent } from './edit/edit.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent, AppointmentComponent, EditComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    NgFor,
    DecimalPipe,
    ReactiveFormsModule,
  ],
})
export class UserModule {}
