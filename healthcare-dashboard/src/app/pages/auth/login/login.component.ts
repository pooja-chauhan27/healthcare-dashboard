import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

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
  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      userEmail: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }
  login() {
    if (this.loginFormGroup.valid) {
      this.commonService
        .login(this.loginFormGroup.value)
        .subscribe((result) => {
          this.formObj = result;
        });
    }
  }

  // show password function
  showPassword() {
    this.show = !this.show;
  }
}
