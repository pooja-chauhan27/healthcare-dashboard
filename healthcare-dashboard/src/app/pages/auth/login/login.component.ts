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
  formObj: any;
  public show: boolean = false;
  loginFormGroup = new FormGroup({
    userEmail: new FormControl('', [Validators.required]),
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
        if (
          user.userEmail === `admin@gmail.com` &&
          user.userPassword === 'admin'
        ) {
          Swal.fire({
            icon: 'success',
            title: 'Admin has successfully logged in!!',
            showConfirmButton: true,
            timer: 1500,
          });
          this.router.navigate(['admin-dashboard']);
        } else {
          Swal.fire({
            icon: 'success',
            title: 'User has successfully logged in!!',
            showConfirmButton: true,
            timer: 1500,
          });
          this.router.navigate(['dashboard']);
        }
      } else {
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
