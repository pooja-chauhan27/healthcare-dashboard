import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [DashboardComponent, AboutComponent],
  imports: [CommonModule, UserRoutingModule],
})
export class UserModule {}
