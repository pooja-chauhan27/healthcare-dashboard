import { Component, SimpleChanges } from '@angular/core';
import { CommonService } from './shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'healthcare-dashboard';
  public showContent: boolean = true;
  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit() {}

  ngDoCheck() {
    if (
      window.location.pathname === '/register' ||
      window.location.pathname === '/login' ||
      window.location.pathname === '/forgot-password'
    ) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }
}
