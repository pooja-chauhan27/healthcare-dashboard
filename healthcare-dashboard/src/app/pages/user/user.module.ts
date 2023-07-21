import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, NgFor } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DashboardComponent, AboutComponent],
  imports: [CommonModule, UserRoutingModule, NgFor, DecimalPipe],
})
export class UserModule {}
