import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AsideComponent } from './component/aside/aside.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

@NgModule({
  declarations: [HeaderComponent, AsideComponent, DefaultLayoutComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule, RouterLink],
  exports: [HeaderComponent, AsideComponent, DefaultLayoutComponent],
})
export class SharedModule {}
