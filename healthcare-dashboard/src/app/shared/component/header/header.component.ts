import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public isCollapsed: boolean = this.commonService.isCollapsed;

  constructor(private commonService: CommonService) {}

  // aside navbar toggle
  public closeMenu() {
    this.isCollapsed = !this.isCollapsed;
    this.commonService.isCollapsed = this.isCollapsed;
  }
}
