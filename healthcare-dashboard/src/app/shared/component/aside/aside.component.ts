import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  isCollapsed: boolean = this.commonService.isCollapsed;
  constructor(private commonService: CommonService) {}

  ngDoCheck(): void {
    this.isCollapsed = this.commonService.isCollapsed;
  }

}
