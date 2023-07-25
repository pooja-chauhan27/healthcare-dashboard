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
  isCollapsed: boolean = this.commonService.isCollapsed;
  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'admin@gmail.com') {
      this.adminDashboard = this.commonService.adminDashboard = true;
      this.userDashboard = this.commonService.userDashboard = false;
    } else {
      this.adminDashboard = this.commonService.adminDashboard = false;
      this.userDashboard = this.commonService.userDashboard = true;
    }
  }

  ngDoCheck(): void {
    this.isCollapsed = this.commonService.isCollapsed;
  }
  logout() {
    this.commonService.logout();
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
