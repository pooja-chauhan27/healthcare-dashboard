import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  public show = false;
  public passwordMatch: boolean = true;
  public registerFormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    userPassword: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });

  constructor(private commonService: CommonService, private router: Router) {}

  ngOnInit() {
    this.registerFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      userEmail: new FormControl('', [Validators.required, Validators.email]),
      userPassword: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  // registration form
  register() {
    let formValue = this.registerFormGroup.value;
    if (this.registerFormGroup.valid) {
      //if password matches to confirm password
      if (
        this.registerFormGroup.value.userPassword ===
        this.registerFormGroup.value.confirmPassword
      ) {
        this.passwordMatch = true;
        // register user
        this.commonService.registerUser(formValue).subscribe((result) => {
          Swal.fire({
            title: 'You have successfully registered!',
            icon: 'success',
            confirmButtonColor: '#3085d6',
          }).then((result) => {
            if (result.isConfirmed) {
              console.log(result);
              this.registerFormGroup.reset();
              this.router.navigate(['', 'login']);
            }
          });
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
