import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  formObj: any;
  public show = false;
  registerFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required]),
  });
  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
    });
  }

  // registration form
  register() {
    // console.log(this.registerFormGroup.value);
    let formValue = this.registerFormGroup.value;
    if (this.registerFormGroup.valid) {
      this.commonService.registerUser(formValue).subscribe((result) => {
        console.log(result);
        alert('You have successfully registered!');
        setTimeout(() => {
          this.registerFormGroup.reset();
          // this.router.navigate(['', '/admin/login']);
          console.log(this.router.navigate(['/admin/login']));
        }, 1000);
      });
    }
  }

  // show password function
  showPassword() {
    this.show = !this.show;
  }
}
