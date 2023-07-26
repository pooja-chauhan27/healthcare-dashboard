import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss'],
})
export class AsideComponent {
  public adminDashboard: boolean = this.commonService.adminDashboard;
  public userDashboard: boolean = this.commonService.userDashboard;
  public isCollapsed: boolean = this.commonService.isCollapsed;
  public activeRoute!: string;
  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'admin@gmail.com') {
      this.adminDashboard = this.commonService.adminDashboard;
      this.userDashboard = this.commonService.userDashboard;
      this.activeRoute = 'admin-dashboard';
    } else {
      this.adminDashboard = this.commonService.adminDashboard;
      this.userDashboard = this.commonService.userDashboard;
      this.activeRoute = 'dashboard';
    }
  }

  ngDoCheck(): void {
    this.isCollapsed = this.commonService.isCollapsed;
  }
  logout() {
    this.commonService.logout();
    localStorage.setItem('isLoggedIn', 'false');
    Swal.fire({
      title: 'Do you want to Logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['login']);
        Swal.fire('Logged Out!', 'You have been logged out');
      }
    });
  }
}
