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
  loginFormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
  });
  constructor(private commonService: CommonService) {}
  ngOnInit() {
    this.loginFormGroup = new FormGroup({
      userName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
    });
  }
  login() {
    let formValue = this.loginFormGroup.value;
    this.commonService.login(this.loginFormGroup.value).subscribe((result) => {
      console.log(result.success);
    });
  }
}
