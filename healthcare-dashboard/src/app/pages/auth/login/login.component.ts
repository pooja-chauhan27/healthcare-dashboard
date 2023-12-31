import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  public show: boolean = false;
  public adminEmail: string = 'admin@gmail.com';
  public adminPassword: string = 'admin';
  public loginFormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required]),
  });

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  // login functionality
  login() {
    this.commonService.login().subscribe((result) => {
      const user = result.find((data: any) => {
        return (
          data.userEmail === this.loginFormGroup.value.userEmail &&
          data.userPassword === this.loginFormGroup.value.userPassword
        );
      });
      if (user) {
        // if admin is logged
        if (
          user.userEmail === this.adminEmail &&
          user.userPassword === this.adminPassword
        ) {
          localStorage.setItem('isLogged', user.userEmail);
          localStorage.setItem('isLoggedIn', 'true');
          this.commonService.adminDashboard = true;
          this.commonService.userDashboard = false;
          Swal.fire({
            icon: 'success',
            title: 'Admin has successfully logged in!!',
            showConfirmButton: true,
            timer: 1500,
          });
          this.router.navigate(['admin-dashboard']);
        } else {
          localStorage.setItem('isLogged', user.userEmail);
          localStorage.setItem('isLoggedIn', 'true');
          this.commonService.adminDashboard = false;
          this.commonService.userDashboard = true;
          Swal.fire({
            icon: 'success',
            title: 'User has successfully logged in!!',
            showConfirmButton: true,
            timer: 1500,
          });
          this.router.navigate(['dashboard']);
        }
      } else {
        localStorage.setItem('isLoggedIn', 'false');
        Swal.fire({
          icon: 'error',
          title: 'Login Failed!!',
          showConfirmButton: true,
          timer: 1500,
        });
      }
    });
  }

  // show password function
  showPassword() {
    this.show = !this.show;
  }
}
