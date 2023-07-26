import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/shared/services/common.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent {
  public show: boolean = false;
  public user: any = [];
  public editFormGroup = new FormGroup({
    image: new FormControl(this.user.image),
    name: new FormControl(this.user.name),
    email: new FormControl(this.user.email),
    date: new FormControl(this.user.date),
    visitTime: new FormControl(this.user.visitTime),
    doctor: new FormControl(this.user.doctor),
    conditions: new FormControl(this.user.conditions),
  });

  constructor(
    private route: ActivatedRoute,
    private commonService: CommonService,
    private router: Router
  ) {}

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.commonService.getUserId(id).subscribe((result) => {
      this.user = result;
      this.editFormGroup = new FormGroup({
        image: new FormControl(this.user.image),
        name: new FormControl(this.user.name),
        email: new FormControl(this.user.email),
        date: new FormControl(this.user.date),
        visitTime: new FormControl(this.user.visitTime),
        doctor: new FormControl(this.user.doctor),
        conditions: new FormControl(this.user.conditions),
      });
    });
  }

  // update function
  update() {
    this.commonService
      .updateAppointment(
        this.route.snapshot.params['id'],
        this.editFormGroup.value
      )
      .subscribe((result) => {
        console.log(result);
      });
    Swal.fire({
      title: 'You have successfully updated!',
      icon: 'success',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['', 'dashboard']);
      }
    });
  }

  // cancel function
  cancel() {
    Swal.fire({
      title: 'You have Cancelled!',
      icon: 'error',
      confirmButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigate(['', 'dashboard']);
      }
    });
  }

  // show password function
  showPassword() {
    this.show = !this.show;
  }
}
