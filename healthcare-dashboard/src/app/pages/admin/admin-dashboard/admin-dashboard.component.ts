import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  public registerUser: any[] = [];
  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.commonService.getRegisterUser().subscribe((result) => {
      console.log(result);
      this.registerUser = result;
    });
  }
}
