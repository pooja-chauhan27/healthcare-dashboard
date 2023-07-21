import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { AsideComponent } from './component/aside/aside.component';
import { RouterLink, RouterModule } from '@angular/router';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [HeaderComponent, AsideComponent],
  imports: [CommonModule, RouterModule, NgbCollapseModule, RouterLink],
  exports: [HeaderComponent, AsideComponent],
})
export class SharedModule {}
