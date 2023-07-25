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
  public passwordMatch: boolean = true;
  registerFormGroup!: FormGroup;
  constructor(private commonService: CommonService, private router: Router) {}
  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required]),
      userPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  // registration form
  register() {
    let formValue = this.registerFormGroup.value;
    if (this.registerFormGroup.valid) {
      //if password matches to confirm password field
      if (
        this.registerFormGroup.value.userPassword ===
        this.registerFormGroup.value.confirmPassword
      ) {
        this.passwordMatch = true;
        // register user
        this.commonService.registerUser(formValue).subscribe((result) => {
          console.log(result);
          alert('You have successfully registered!');
          setTimeout(() => {
            this.registerFormGroup.reset();
            console.log(this.router.navigate(['/login']));
          }, 1000);
        });
      } else {
        this.passwordMatch = false;
      }
    }
  }

  // show password function
  showPassword() {
    this.show = !this.show;
  }
}
